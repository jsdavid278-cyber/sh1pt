# Stripe (CLI wrapper)

sh1pt module for Stripe (CLI wrapper).

## Package

- Name: `@profullstack/sh1pt-target-payment-stripe`
- Path: `packages/targets/payment-stripe`
- Adapter ID: `payment-stripe`
- Homepage: https://sh1pt.com

## Scripts

- `build`: `tsc -p tsconfig.json`
- `prepublishOnly`: `pnpm build`
- `typecheck`: `tsc -p tsconfig.json --noEmit`

## Usage

```bash
pnpm add @profullstack/sh1pt-target-payment-stripe
```

## Development

```bash
pnpm --filter @profullstack/sh1pt-target-payment-stripe typecheck
```

Run tests from the repository root when this module includes a test file:

```bash
pnpm vitest run packages/targets/payment-stripe/src/index.test.ts
```
