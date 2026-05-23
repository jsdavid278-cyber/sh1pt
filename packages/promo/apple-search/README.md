# Apple Search Ads

sh1pt module for Apple Search Ads.

## Package

- Name: `@profullstack/sh1pt-promo-apple-search`
- Path: `packages/promo/apple-search`
- Adapter ID: `promo-apple-search`
- Homepage: https://sh1pt.com

## Scripts

- `build`: `tsc -p tsconfig.json`
- `prepublishOnly`: `pnpm build`
- `typecheck`: `tsc -p tsconfig.json --noEmit`

## Usage

```bash
pnpm add @profullstack/sh1pt-promo-apple-search
```

## Development

```bash
pnpm --filter @profullstack/sh1pt-promo-apple-search typecheck
```

Run tests from the repository root when this module includes a test file:

```bash
pnpm vitest run packages/promo/apple-search/src/index.test.ts
```
