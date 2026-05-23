# eBay Partner Network

sh1pt module for eBay Partner Network.

## Package

- Name: `@profullstack/sh1pt-affiliate-ebay-partner`
- Path: `packages/affiliates/ebay-partner`
- Adapter ID: `affiliate-ebay-partner`
- Homepage: https://sh1pt.com

## Scripts

- `build`: `tsc -p tsconfig.json`
- `prepublishOnly`: `pnpm build`
- `typecheck`: `tsc -p tsconfig.json --noEmit`

## Usage

```bash
pnpm add @profullstack/sh1pt-affiliate-ebay-partner
```

## Development

```bash
pnpm --filter @profullstack/sh1pt-affiliate-ebay-partner typecheck
```

Run tests from the repository root when this module includes a test file:

```bash
pnpm vitest run packages/affiliates/ebay-partner/src/index.test.ts
```
