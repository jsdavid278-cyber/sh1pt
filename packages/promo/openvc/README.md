# OpenVC (free VC directory - discovery only)

sh1pt module for OpenVC (free VC directory - discovery only).

## Package

- Name: `@profullstack/sh1pt-promo-openvc`
- Path: `packages/promo/openvc`
- Adapter ID: `promo-openvc`
- Homepage: https://sh1pt.com

## Scripts

- `build`: `tsc -p tsconfig.json`
- `prepublishOnly`: `pnpm build`
- `typecheck`: `tsc -p tsconfig.json --noEmit`

## Usage

```bash
pnpm add @profullstack/sh1pt-promo-openvc
```

## Development

```bash
pnpm --filter @profullstack/sh1pt-promo-openvc typecheck
```

Run tests from the repository root when this module includes a test file:

```bash
pnpm vitest run packages/promo/openvc/src/index.test.ts
```
