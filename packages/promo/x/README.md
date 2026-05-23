# X Ads (Twitter)

sh1pt module for X Ads (Twitter).

## Package

- Name: `@profullstack/sh1pt-promo-x`
- Path: `packages/promo/x`
- Adapter ID: `promo-x`
- Homepage: https://sh1pt.com

## Scripts

- `build`: `tsc -p tsconfig.json`
- `prepublishOnly`: `pnpm build`
- `typecheck`: `tsc -p tsconfig.json --noEmit`

## Usage

```bash
pnpm add @profullstack/sh1pt-promo-x
```

## Development

```bash
pnpm --filter @profullstack/sh1pt-promo-x typecheck
```

Run tests from the repository root when this module includes a test file:

```bash
pnpm vitest run packages/promo/x/src/index.test.ts
```
