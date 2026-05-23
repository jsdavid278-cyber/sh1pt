# LinkedIn Ads

sh1pt module for LinkedIn Ads.

## Package

- Name: `@profullstack/sh1pt-promo-linkedin`
- Path: `packages/promo/linkedin`
- Adapter ID: `promo-linkedin`
- Homepage: https://sh1pt.com

## Scripts

- `build`: `tsc -p tsconfig.json`
- `prepublishOnly`: `pnpm build`
- `typecheck`: `tsc -p tsconfig.json --noEmit`

## Usage

```bash
pnpm add @profullstack/sh1pt-promo-linkedin
```

## Development

```bash
pnpm --filter @profullstack/sh1pt-promo-linkedin typecheck
```

Run tests from the repository root when this module includes a test file:

```bash
pnpm vitest run packages/promo/linkedin/src/index.test.ts
```
