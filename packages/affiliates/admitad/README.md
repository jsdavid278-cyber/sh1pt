# Admitad

sh1pt module for Admitad.

## Package

- Name: `@profullstack/sh1pt-affiliate-admitad`
- Path: `packages/affiliates/admitad`
- Adapter ID: `affiliate-admitad`
- Homepage: https://sh1pt.com

## Scripts

- `build`: `tsc -p tsconfig.json`
- `prepublishOnly`: `pnpm build`
- `typecheck`: `tsc -p tsconfig.json --noEmit`

## Usage

```bash
pnpm add @profullstack/sh1pt-affiliate-admitad
```

## Development

```bash
pnpm --filter @profullstack/sh1pt-affiliate-admitad typecheck
```

Run tests from the repository root when this module includes a test file:

```bash
pnpm vitest run packages/affiliates/admitad/src/index.test.ts
```
