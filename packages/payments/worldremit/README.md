# WorldRemit (cross-border payouts)

sh1pt module for WorldRemit (cross-border payouts).

## Package

- Name: `@profullstack/sh1pt-payment-worldremit`
- Path: `packages/payments/worldremit`
- Adapter ID: `payment-worldremit`
- Homepage: https://sh1pt.com

## Scripts

- `build`: `tsc -p tsconfig.json`
- `prepublishOnly`: `pnpm build`
- `typecheck`: `tsc -p tsconfig.json --noEmit`

## Usage

```bash
pnpm add @profullstack/sh1pt-payment-worldremit
```

## Development

```bash
pnpm --filter @profullstack/sh1pt-payment-worldremit typecheck
```

Run tests from the repository root when this module includes a test file:

```bash
pnpm vitest run packages/payments/worldremit/src/index.test.ts
```
