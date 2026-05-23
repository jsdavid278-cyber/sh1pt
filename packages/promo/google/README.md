# Google Ads (Search / Display / App / PMax)

sh1pt module for Google Ads (Search / Display / App / PMax).

## Package

- Name: `@profullstack/sh1pt-promo-google`
- Path: `packages/promo/google`
- Adapter ID: `promo-google`
- Homepage: https://sh1pt.com

## Scripts

- `build`: `tsc -p tsconfig.json`
- `prepublishOnly`: `pnpm build`
- `typecheck`: `tsc -p tsconfig.json --noEmit`

## Usage

```bash
pnpm add @profullstack/sh1pt-promo-google
```

## Development

```bash
pnpm --filter @profullstack/sh1pt-promo-google typecheck
```

Run tests from the repository root when this module includes a test file:

```bash
pnpm vitest run packages/promo/google/src/index.test.ts
```
