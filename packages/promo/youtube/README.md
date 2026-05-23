# YouTube Ads (via Google Ads)

sh1pt module for YouTube Ads (via Google Ads).

## Package

- Name: `@profullstack/sh1pt-promo-youtube`
- Path: `packages/promo/youtube`
- Adapter ID: `promo-youtube`
- Homepage: https://sh1pt.com

## Scripts

- `build`: `tsc -p tsconfig.json`
- `prepublishOnly`: `pnpm build`
- `typecheck`: `tsc -p tsconfig.json --noEmit`

## Usage

```bash
pnpm add @profullstack/sh1pt-promo-youtube
```

## Development

```bash
pnpm --filter @profullstack/sh1pt-promo-youtube typecheck
```

Run tests from the repository root when this module includes a test file:

```bash
pnpm vitest run packages/promo/youtube/src/index.test.ts
```
