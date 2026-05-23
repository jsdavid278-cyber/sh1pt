# Amazon Associates / PAAPI

sh1pt module for Amazon Associates / PAAPI.

## Package

- Name: `@profullstack/sh1pt-affiliate-amazon-associates`
- Path: `packages/affiliates/amazon-associates`
- Adapter ID: `affiliate-amazon-associates`
- Homepage: https://sh1pt.com

## Scripts

- `build`: `tsc -p tsconfig.json`
- `prepublishOnly`: `pnpm build`
- `typecheck`: `tsc -p tsconfig.json --noEmit`

## Usage

```bash
pnpm add @profullstack/sh1pt-affiliate-amazon-associates
```

## Development

```bash
pnpm --filter @profullstack/sh1pt-affiliate-amazon-associates typecheck
```

Run tests from the repository root when this module includes a test file:

```bash
pnpm vitest run packages/affiliates/amazon-associates/src/index.test.ts
```
