# Kickstarter (reward-based crowdfunding)

sh1pt module for Kickstarter (reward-based crowdfunding).

## Package

- Name: `@profullstack/sh1pt-promo-kickstarter`
- Path: `packages/promo/kickstarter`
- Adapter ID: `promo-kickstarter`
- Homepage: https://sh1pt.com

## Scripts

- `build`: `tsc -p tsconfig.json`
- `prepublishOnly`: `pnpm build`
- `typecheck`: `tsc -p tsconfig.json --noEmit`

## Usage

```bash
pnpm add @profullstack/sh1pt-promo-kickstarter
```

## Development

```bash
pnpm --filter @profullstack/sh1pt-promo-kickstarter typecheck
```

Run tests from the repository root when this module includes a test file:

```bash
pnpm vitest run packages/promo/kickstarter/src/index.test.ts
```
