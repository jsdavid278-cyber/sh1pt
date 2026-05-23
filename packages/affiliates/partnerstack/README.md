# PartnerStack

sh1pt module for PartnerStack.

## Package

- Name: `@profullstack/sh1pt-affiliate-partnerstack`
- Path: `packages/affiliates/partnerstack`
- Adapter ID: `affiliate-partnerstack`
- Homepage: https://sh1pt.com

## Scripts

- `build`: `tsc -p tsconfig.json`
- `prepublishOnly`: `pnpm build`
- `typecheck`: `tsc -p tsconfig.json --noEmit`

## Usage

```bash
pnpm add @profullstack/sh1pt-affiliate-partnerstack
```

## Development

```bash
pnpm --filter @profullstack/sh1pt-affiliate-partnerstack typecheck
```

Run tests from the repository root when this module includes a test file:

```bash
pnpm vitest run packages/affiliates/partnerstack/src/index.test.ts
```
