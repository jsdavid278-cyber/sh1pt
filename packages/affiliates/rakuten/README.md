# Rakuten Advertising

sh1pt module for Rakuten Advertising.

## Package

- Name: `@profullstack/sh1pt-affiliate-rakuten`
- Path: `packages/affiliates/rakuten`
- Adapter ID: `affiliate-rakuten`
- Homepage: https://sh1pt.com

## Scripts

- `build`: `tsc -p tsconfig.json`
- `prepublishOnly`: `pnpm build`
- `typecheck`: `tsc -p tsconfig.json --noEmit`

## Usage

```bash
pnpm add @profullstack/sh1pt-affiliate-rakuten
```

## Development

```bash
pnpm --filter @profullstack/sh1pt-affiliate-rakuten typecheck
```

Run tests from the repository root when this module includes a test file:

```bash
pnpm vitest run packages/affiliates/rakuten/src/index.test.ts
```
