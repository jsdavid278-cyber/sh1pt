# Stripe (cards / ACH / subscriptions / Connect)

sh1pt module for Stripe (cards / ACH / subscriptions / Connect).

## Package

- Name: `@profullstack/sh1pt-payment-stripe`
- Path: `packages/payments/stripe`
- Adapter ID: `payment-stripe`
- Homepage: https://sh1pt.com

## Scripts

- `build`: `tsc -p tsconfig.json`
- `prepublishOnly`: `pnpm build`
- `typecheck`: `tsc -p tsconfig.json --noEmit`

## Usage

```bash
pnpm add @profullstack/sh1pt-payment-stripe
```

## Development

```bash
pnpm --filter @profullstack/sh1pt-payment-stripe typecheck
```

Run tests from the repository root when this module includes a test file:

```bash
pnpm vitest run packages/payments/stripe/src/index.test.ts
```
