# Actions Fleet Core

Action-pack schema, validator, deterministic renderer, and catalog loader for sh1pt Actions Fleet.

## Package

- Name: `@profullstack/sh1pt-actions-fleet-core`
- Path: `packages/actions-fleet-core`
- Homepage: https://sh1pt.com

## Scripts

- `build`: `tsc -p tsconfig.json`
- `prepublishOnly`: `pnpm build`
- `typecheck`: `tsc -p tsconfig.json --noEmit`

## Usage

```bash
pnpm add @profullstack/sh1pt-actions-fleet-core
```

## Development

```bash
pnpm --filter @profullstack/sh1pt-actions-fleet-core typecheck
```

Run tests from the repository root when this module includes a test file:

```bash
pnpm vitest run packages/actions-fleet-core/src/index.test.ts
```
