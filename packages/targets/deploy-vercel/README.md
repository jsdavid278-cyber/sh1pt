# Vercel

sh1pt module for Vercel.

## Package

- Name: `@profullstack/sh1pt-target-deploy-vercel`
- Path: `packages/targets/deploy-vercel`
- Adapter ID: `deploy-vercel`
- Homepage: https://sh1pt.com

## Scripts

- `build`: `tsc -p tsconfig.json`
- `prepublishOnly`: `pnpm build`
- `typecheck`: `tsc -p tsconfig.json --noEmit`

## Usage

```bash
pnpm add @profullstack/sh1pt-target-deploy-vercel
```

## Development

```bash
pnpm --filter @profullstack/sh1pt-target-deploy-vercel typecheck
```

Run tests from the repository root when this module includes a test file:

```bash
pnpm vitest run packages/targets/deploy-vercel/src/index.test.ts
```
