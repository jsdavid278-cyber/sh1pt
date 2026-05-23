# FlexOffers

sh1pt module for FlexOffers.

## Package

- Name: `@profullstack/sh1pt-affiliate-flexoffers`
- Path: `packages/affiliates/flexoffers`
- Adapter ID: `affiliate-flexoffers`
- Homepage: https://sh1pt.com

## Scripts

- `build`: `tsc -p tsconfig.json`
- `prepublishOnly`: `pnpm build`
- `typecheck`: `tsc -p tsconfig.json --noEmit`

## Usage

```bash
pnpm add @profullstack/sh1pt-affiliate-flexoffers
```

## Development

```bash
pnpm --filter @profullstack/sh1pt-affiliate-flexoffers typecheck
```

Run tests from the repository root when this module includes a test file:

```bash
pnpm vitest run packages/affiliates/flexoffers/src/index.test.ts
```
