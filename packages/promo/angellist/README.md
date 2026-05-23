# AngelList (investor discovery + SPVs)

sh1pt module for AngelList (investor discovery + SPVs).

## Package

- Name: `@profullstack/sh1pt-promo-angellist`
- Path: `packages/promo/angellist`
- Adapter ID: `promo-angellist`
- Homepage: https://sh1pt.com

## Scripts

- `build`: `tsc -p tsconfig.json`
- `prepublishOnly`: `pnpm build`
- `typecheck`: `tsc -p tsconfig.json --noEmit`

## Usage

```bash
pnpm add @profullstack/sh1pt-promo-angellist
```

## Development

```bash
pnpm --filter @profullstack/sh1pt-promo-angellist typecheck
```

Run tests from the repository root when this module includes a test file:

```bash
pnpm vitest run packages/promo/angellist/src/index.test.ts
```
