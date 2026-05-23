# Railway

sh1pt module for Railway.

## Package

- Name: `@profullstack/sh1pt-target-deploy-railway`
- Path: `packages/targets/deploy-railway`
- Adapter ID: `deploy-railway`
- Homepage: https://sh1pt.com

## Scripts

- `build`: `tsc -p tsconfig.json`
- `prepublishOnly`: `pnpm build`
- `typecheck`: `tsc -p tsconfig.json --noEmit`

## Usage

```bash
pnpm add @profullstack/sh1pt-target-deploy-railway
```

## Development

```bash
pnpm --filter @profullstack/sh1pt-target-deploy-railway typecheck
```

Run tests from the repository root when this module includes a test file:

```bash
pnpm vitest run packages/targets/deploy-railway/src/index.test.ts
```
