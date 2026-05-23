# Tapfiliate

sh1pt module for Tapfiliate.

## Package

- Name: `@profullstack/sh1pt-affiliate-tapfiliate`
- Path: `packages/affiliates/tapfiliate`
- Adapter ID: `affiliate-tapfiliate`
- Homepage: https://sh1pt.com

## Scripts

- `build`: `tsc -p tsconfig.json`
- `prepublishOnly`: `pnpm build`
- `typecheck`: `tsc -p tsconfig.json --noEmit`

## Usage

```bash
pnpm add @profullstack/sh1pt-affiliate-tapfiliate
```

## Development

```bash
pnpm --filter @profullstack/sh1pt-affiliate-tapfiliate typecheck
```

Run tests from the repository root when this module includes a test file:

```bash
pnpm vitest run packages/affiliates/tapfiliate/src/index.test.ts
```
