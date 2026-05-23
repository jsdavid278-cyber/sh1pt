# PayPal (CLI wrapper)

sh1pt module for PayPal (CLI wrapper).

## Package

- Name: `@profullstack/sh1pt-target-payment-paypal`
- Path: `packages/targets/payment-paypal`
- Adapter ID: `payment-paypal`
- Homepage: https://sh1pt.com

## Scripts

- `build`: `tsc -p tsconfig.json`
- `prepublishOnly`: `pnpm build`
- `typecheck`: `tsc -p tsconfig.json --noEmit`

## Usage

```bash
pnpm add @profullstack/sh1pt-target-payment-paypal
```

## Development

```bash
pnpm --filter @profullstack/sh1pt-target-payment-paypal typecheck
```

Run tests from the repository root when this module includes a test file:

```bash
pnpm vitest run packages/targets/payment-paypal/src/index.test.ts
```
