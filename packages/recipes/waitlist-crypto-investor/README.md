# Prepaid Waitlist + Investor Page + Crypto Early-Access + Referrals

Land a marketing page everywhere sh1pt ships. Collect prepaid signups at an early-bird price.

## Package

- Name: `@profullstack/sh1pt-recipe-waitlist-crypto-investor`
- Path: `packages/recipes/waitlist-crypto-investor`
- Adapter ID: `waitlist-crypto-investor`
- Homepage: https://sh1pt.com

## Scripts

- `build`: `tsc -p tsconfig.json`
- `prepublishOnly`: `pnpm build`
- `typecheck`: `tsc -p tsconfig.json --noEmit`

## Usage

```bash
pnpm add @profullstack/sh1pt-recipe-waitlist-crypto-investor
```

## Development

```bash
pnpm --filter @profullstack/sh1pt-recipe-waitlist-crypto-investor typecheck
```

Run tests from the repository root when this module includes a test file:

```bash
pnpm vitest run packages/recipes/waitlist-crypto-investor/src/index.test.ts
```
