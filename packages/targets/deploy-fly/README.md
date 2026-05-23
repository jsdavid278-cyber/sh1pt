# Fly.io

sh1pt module for Fly.io.

## Package

- Name: `@profullstack/sh1pt-target-deploy-fly`
- Path: `packages/targets/deploy-fly`
- Adapter ID: `deploy-fly`
- Homepage: https://sh1pt.com

## Scripts

- `build`: `tsc -p tsconfig.json`
- `prepublishOnly`: `pnpm build`
- `typecheck`: `tsc -p tsconfig.json --noEmit`

## Usage

```bash
pnpm add @profullstack/sh1pt-target-deploy-fly
```

## Development

```bash
pnpm --filter @profullstack/sh1pt-target-deploy-fly typecheck
```

Run tests from the repository root when this module includes a test file:

```bash
pnpm vitest run packages/targets/deploy-fly/src/index.test.ts
```
