import { describe, it, expect } from 'vitest';
import { mkdtempSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { readTargetSummary, shipCmd } from './ship.js';

describe('shipCmd', () => {
  it('is registered as a top-level command named "ship"', () => {
    expect(shipCmd.name()).toBe('ship');
  });

  it('has the expected subcommands', () => {
    const subcommandNames = shipCmd.commands.map((c) => c.name());
    expect(subcommandNames).toContain('init');
    expect(subcommandNames).toContain('status');
    expect(subcommandNames).toContain('target');
    expect(subcommandNames).toContain('setup');
    expect(subcommandNames).toContain('rollback');
    expect(subcommandNames).toContain('lint');
    expect(subcommandNames).toContain('logs');
  });

  it('has target subcommand with expected sub-subcommands', () => {
    const targetCmd = shipCmd.commands.find((c) => c.name() === 'target');
    expect(targetCmd).toBeDefined();
    const targetSubNames = targetCmd!.commands.map((c) => c.name());
    expect(targetSubNames).toContain('add');
    expect(targetSubNames).toContain('remove');
    expect(targetSubNames).toContain('list');
    expect(targetSubNames).toContain('available');
  });

  it('supports --target and --channel options', () => {
    const optNames = shipCmd.options.map((o) => o.long);
    expect(optNames).toContain('--target');
    expect(optNames).toContain('--channel');
    expect(optNames).toContain('--dry-run');
    expect(optNames).toContain('--skip-lint');
  });

  it('ignores targets examples inside comments when reading configured targets', () => {
    const cwd = mkdtempSync(join(tmpdir(), 'sh1pt-targets-'));
    writeFileSync(
      join(cwd, 'sh1pt.config.ts'),
      `
        // Example only: targets: { fake: { use: 'wrong' } }
        export default {
          targets: {
            web: { use: 'next', enabled: false }
          }
        };
      `,
    );

    expect(readTargetSummary(cwd, 'sh1pt.config.ts')).toEqual([
      { id: 'web', use: 'next', enabled: false },
    ]);
  });

  it('reads string values that contain the opposite quote delimiter', () => {
    const cwd = mkdtempSync(join(tmpdir(), 'sh1pt-targets-'));
    writeFileSync(
      join(cwd, 'sh1pt.config.ts'),
      `
        export default {
          targets: {
            web: { use: "foo'adapter" }
          }
        };
      `,
    );

    expect(readTargetSummary(cwd, 'sh1pt.config.ts')).toEqual([
      { id: 'web', use: "foo'adapter", enabled: true },
    ]);
  });

  it('closes strings after an even run of backslashes before a quote', () => {
    const cwd = mkdtempSync(join(tmpdir(), 'sh1pt-targets-'));
    writeFileSync(
      join(cwd, 'sh1pt.config.ts'),
      `
        export default {
          targets: {
            web: { use: "path\\\\", enabled: true },
            api: { use: 'node' }
          }
        };
      `,
    );

    expect(readTargetSummary(cwd, 'sh1pt.config.ts')).toEqual([
      { id: 'web', use: 'path\\\\', enabled: true },
      { id: 'api', use: 'node', enabled: true },
    ]);
  });
});
