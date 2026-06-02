import { Command } from 'commander';
import { existsSync, readFileSync } from 'node:fs';
import { join } from 'node:path';
import kleur from 'kleur';
import { lint } from '@profullstack/sh1pt-policy';
import type { Manifest } from '@profullstack/sh1pt-core';
import { initAction } from './init.js';

async function loadManifest(): Promise<Manifest> {
  // Stub — real impl dynamic-imports ./sh1pt.config.ts
  return { name: 'stub', version: '0.0.0', channels: ['stable', 'beta', 'canary'], targets: {} };
}

type TargetSummary = {
  id: string;
  use: string;
  enabled: boolean;
};

function readTargetSummary(cwd: string, configPath: string): TargetSummary[] {
  const path = configPath.startsWith('/') ? configPath : join(cwd, configPath);
  if (!existsSync(path)) {
    throw new Error(`No ${configPath} found. Run sh1pt ship init first or pass --config <path>.`);
  }
  const source = readFileSync(path, 'utf8');
  const targets = readObjectBody(source, 'targets');
  if (!targets) return [];
  return readTopLevelObjectEntries(targets).map(({ key, body }) => ({
    id: key,
    use: readStringProperty(body, 'use') ?? key,
    enabled: readBooleanProperty(body, 'enabled') ?? true,
  }));
}

export const shipCmd = new Command('ship')
  .description('Publish built artifacts to their target stores and registries')
  .option('-t, --target <id...>', 'target ids to ship (default: all enabled)')
  .option('-c, --channel <name>', 'release channel', 'stable')
  .option('--cloud', 'run submission, retries, polling, and logs in sh1pt cloud')
  .option('--dry-run', 'simulate without uploading')
  .option('--skip-lint', 'skip the pre-ship policy linter (not recommended)')
  .action(async (opts: { target?: string[]; channel: string; cloud?: boolean; dryRun?: boolean; skipLint?: boolean }) => {
    const targets = opts.target?.join(', ') ?? 'all enabled';
    const tag = opts.dryRun ? kleur.yellow('[dry-run]') : kleur.green('[live]');
    const where = opts.cloud ? 'cloud' : 'local';
    if (!opts.skipLint) {
      console.log(kleur.dim('running pre-ship policy linter…'));
      // TODO: load manifest, call lint(ctx) — abort on errors unless --skip-lint
    }
    console.log(`${tag} ship (${where}) · channel=${opts.channel} · targets=${targets}`);
    // TODO: load manifest, resolve latest build, invoke Target.ship(), record release
  });

shipCmd
  .command('init')
  .description('Scaffold sh1pt.config.ts in the current project')
  .action(initAction);

shipCmd
  .command('setup')
  .description('Connect store credentials (one OAuth per store where possible, tracked checklists for human-only steps)')
  .option('--store <id...>', 'only set up these stores')
  .option('--poll', 're-check every 30s until all stores connected')
  .action((opts: { store?: string[]; poll?: boolean }) => {
    const stores = opts.store?.join(', ') ?? 'all targets from manifest';
    console.log(kleur.cyan(`[stub] ship setup · stores=${stores}`));
    // TODO: per-target onboard/connect flow with deep links + status polling
  });

shipCmd
  .command('status')
  .description('Current release status across targets')
  .option('-t, --target <id>')
  .option('--json')
  .action((opts: { target?: string; json?: boolean }) => {
    if (opts.json) {
      console.log(JSON.stringify({ releases: [], live: {}, inReview: {} }, null, 2));
      return;
    }
    console.log(kleur.dim(`[stub] ship status · target=${opts.target ?? 'all'}`));
    // TODO: fetch per-target live state from cloud
  });

shipCmd
  .command('rollback')
  .description('Roll back the latest release on one or more targets')
  .option('-t, --target <id...>')
  .action((opts: { target?: string[] }) => {
    const targets = opts.target?.join(', ') ?? 'all enabled';
    console.log(kleur.yellow(`[stub] ship rollback · targets=${targets}`));
    // TODO: resolve previous release, invoke Target.rollback()
  });

shipCmd
  .command('lint')
  .description('Check manifest and account against store-policy rules (runs automatically on ship)')
  .option('--strict', 'exit non-zero on warnings as well as errors')
  .option('--json')
  .action(async (opts: { strict?: boolean; json?: boolean }) => {
    const manifest = await loadManifest();
    const result = await lint({ manifest, projectDir: process.cwd() });
    if (opts.json) {
      console.log(JSON.stringify(result, null, 2));
    } else {
      for (const f of result.findings) {
        const color = f.severity === 'error' ? kleur.red : f.severity === 'warn' ? kleur.yellow : kleur.dim;
        const loc = f.path ? kleur.dim(` ${f.path}`) : '';
        console.log(`${color(`[${f.severity}]`)} ${kleur.dim(f.ruleId)}${loc} — ${f.message}`);
        if (f.fix) console.log(`       ${kleur.dim('fix:')} ${f.fix}`);
      }
      console.log(`\n${result.errors} error(s), ${result.warnings} warning(s)`);
    }
    if (result.errors > 0 || (opts.strict && result.warnings > 0)) process.exit(1);
  });

shipCmd
  .command('logs')
  .description('Tail build and ship logs')
  .option('-t, --target <id>')
  .option('-f, --follow')
  .action((opts: { target?: string; follow?: boolean }) => {
    console.log(kleur.dim(`[stub] ship logs · target=${opts.target ?? 'all'} · follow=${!!opts.follow}`));
    // TODO: stream NDJSON-over-SSE from cloud log store
  });

const targetSubCmd = shipCmd.command('target').description('Manage targets in the manifest');

targetSubCmd
  .command('add <id>')
  .description('Add a target adapter to sh1pt.config.ts')
  .action((id: string) => {
    console.log(kleur.cyan(`[stub] target add ${id} — prompt for config and patch sh1pt.config.ts`));
  });

targetSubCmd
  .command('remove <id>')
  .description('Remove a target from sh1pt.config.ts')
  .action((id: string) => {
    console.log(kleur.yellow(`[stub] target remove ${id}`));
  });

targetSubCmd
  .command('list')
  .description('List enabled targets for this project')
  .option('--json', 'print machine-readable output')
  .option('--config <path>', 'config file to read', 'sh1pt.config.ts')
  .action((opts: { json?: boolean; config: string }) => {
    try {
      const targets = readTargetSummary(process.cwd(), opts.config);
      if (opts.json) {
        console.log(JSON.stringify({ targets }, null, 2));
        return;
      }
      if (targets.length === 0) {
        console.log(kleur.dim('No targets configured.'));
        return;
      }
      console.log(kleur.bold('Targets'));
      for (const target of targets) {
        const icon = target.enabled ? kleur.green('●') : kleur.gray('○');
        const status = target.enabled ? kleur.green('enabled') : kleur.gray('disabled');
        console.log(`  ${icon} ${kleur.bold(target.id)}  ${kleur.dim(target.use)}  ${status}`);
      }
    } catch (err) {
      console.error(kleur.red(err instanceof Error ? err.message : String(err)));
      process.exit(1);
    }
  });

targetSubCmd
  .command('available')
  .description('List every target adapter available to install')
  .action(() => {
    console.log(kleur.dim('[stub] target available — fetch from registry'));
  });

function readObjectBody(source: string, property: string): string | undefined {
  const match = new RegExp(`(?:^|[,{\\s])${escapeRegExp(property)}\\s*:`).exec(source);
  if (!match) return undefined;
  const open = source.indexOf('{', match.index + match[0].length);
  if (open === -1) return undefined;
  const close = findMatchingBrace(source, open);
  return close === -1 ? undefined : source.slice(open + 1, close);
}

function readTopLevelObjectEntries(source: string): Array<{ key: string; body: string }> {
  source = stripComments(source);
  const entries: Array<{ key: string; body: string }> = [];
  const keyRe = /(?:^|,)\s*(['"]?[A-Za-z0-9_-]+['"]?)\s*:/g;
  let match: RegExpExecArray | null;
  while ((match = keyRe.exec(source))) {
    const rawKey = match[1];
    if (!rawKey) continue;
    const open = source.indexOf('{', keyRe.lastIndex);
    if (open === -1) continue;
    const between = source.slice(keyRe.lastIndex, open).trim();
    if (between.length > 0) continue;
    const close = findMatchingBrace(source, open);
    if (close === -1) continue;
    entries.push({ key: rawKey.replace(/^['"]|['"]$/g, ''), body: source.slice(open + 1, close) });
    keyRe.lastIndex = close + 1;
  }
  return entries;
}

function stripComments(source: string): string {
  let result = '';
  let quote: '"' | "'" | '`' | undefined;
  let lineComment = false;
  let blockComment = false;
  for (let i = 0; i < source.length; i += 1) {
    const ch = source[i];
    const prev = source[i - 1];
    const next = source[i + 1];
    if (lineComment) {
      if (ch === '\n') {
        lineComment = false;
        result += ch;
      }
      continue;
    }
    if (blockComment) {
      if (prev === '*' && ch === '/') blockComment = false;
      continue;
    }
    if (quote) {
      result += ch;
      if (ch === quote && prev !== '\\') quote = undefined;
      continue;
    }
    if (ch === '/' && next === '/') {
      lineComment = true;
      i += 1;
      continue;
    }
    if (ch === '/' && next === '*') {
      blockComment = true;
      i += 1;
      continue;
    }
    if (ch === '"' || ch === "'" || ch === '`') quote = ch;
    result += ch;
  }
  return result;
}

function findMatchingBrace(source: string, open: number): number {
  let depth = 0;
  let quote: '"' | "'" | '`' | undefined;
  let lineComment = false;
  let blockComment = false;
  for (let i = open; i < source.length; i += 1) {
    const ch = source[i];
    const prev = source[i - 1];
    const next = source[i + 1];
    if (lineComment) {
      if (ch === '\n') lineComment = false;
      continue;
    }
    if (blockComment) {
      if (prev === '*' && ch === '/') blockComment = false;
      continue;
    }
    if (quote) {
      if (ch === quote && prev !== '\\') quote = undefined;
      continue;
    }
    if (ch === '/' && next === '/') {
      lineComment = true;
      i += 1;
      continue;
    }
    if (ch === '/' && next === '*') {
      blockComment = true;
      i += 1;
      continue;
    }
    if (ch === '"' || ch === "'" || ch === '`') {
      quote = ch;
      continue;
    }
    if (ch === '{') depth += 1;
    if (ch === '}') {
      depth -= 1;
      if (depth === 0) return i;
    }
  }
  return -1;
}

function readStringProperty(source: string, key: string): string | undefined {
  const match = new RegExp(`${escapeRegExp(key)}\\s*:\\s*['"]([^'"]+)['"]`).exec(source);
  return match?.[1];
}

function readBooleanProperty(source: string, key: string): boolean | undefined {
  const match = new RegExp(`${escapeRegExp(key)}\\s*:\\s*(true|false)`).exec(source);
  return match?.[1] === undefined ? undefined : match[1] === 'true';
}

function escapeRegExp(input: string): string {
  return input.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}
