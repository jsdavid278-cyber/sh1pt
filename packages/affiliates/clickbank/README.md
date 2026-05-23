# ClickBank

sh1pt module for ClickBank.

## Package

- Name: `@profullstack/sh1pt-affiliate-clickbank`
- Path: `packages/affiliates/clickbank`
- Adapter ID: `affiliate-clickbank`
- Homepage: https://sh1pt.com

## Scripts

- `build`: `tsc -p tsconfig.json`
- `prepublishOnly`: `pnpm build`
- `typecheck`: `tsc -p tsconfig.json --noEmit`

## Usage

```bash
pnpm add @profullstack/sh1pt-affiliate-clickbank
```

## Development

```bash
pnpm --filter @profullstack/sh1pt-affiliate-clickbank typecheck
```

Run tests from the repository root when this module includes a test file:

```bash
pnpm vitest run packages/affiliates/clickbank/src/index.test.ts
```
