# Wefunder (US regulated equity crowdfunding)

sh1pt module for Wefunder (US regulated equity crowdfunding).

## Package

- Name: `@profullstack/sh1pt-promo-wefunder`
- Path: `packages/promo/wefunder`
- Adapter ID: `promo-wefunder`
- Homepage: https://sh1pt.com

## Scripts

- `build`: `tsc -p tsconfig.json`
- `prepublishOnly`: `pnpm build`
- `typecheck`: `tsc -p tsconfig.json --noEmit`

## Usage

```bash
pnpm add @profullstack/sh1pt-promo-wefunder
```

## Development

```bash
pnpm --filter @profullstack/sh1pt-promo-wefunder typecheck
```

Run tests from the repository root when this module includes a test file:

```bash
pnpm vitest run packages/promo/wefunder/src/index.test.ts
```
