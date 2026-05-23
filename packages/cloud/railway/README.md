# Railway (scalable services)

sh1pt module for Railway (scalable services).

## Package

- Name: `@profullstack/sh1pt-cloud-railway`
- Path: `packages/cloud/railway`
- Adapter ID: `cloud-railway`
- Homepage: https://sh1pt.com

## Scripts

- `build`: `tsc -p tsconfig.json`
- `prepublishOnly`: `pnpm build`
- `typecheck`: `tsc -p tsconfig.json --noEmit`

## Usage

```bash
pnpm add @profullstack/sh1pt-cloud-railway
```

## Development

```bash
pnpm --filter @profullstack/sh1pt-cloud-railway typecheck
```

Run tests from the repository root when this module includes a test file:

```bash
pnpm vitest run packages/cloud/railway/src/index.test.ts
```
