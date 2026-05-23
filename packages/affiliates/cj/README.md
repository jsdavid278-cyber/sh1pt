# CJ Affiliate (Commission Junction)

sh1pt module for CJ Affiliate (Commission Junction).

## Package

- Name: `@profullstack/sh1pt-affiliate-cj`
- Path: `packages/affiliates/cj`
- Adapter ID: `affiliate-cj`
- Homepage: https://sh1pt.com

## Scripts

- `build`: `tsc -p tsconfig.json`
- `prepublishOnly`: `pnpm build`
- `typecheck`: `tsc -p tsconfig.json --noEmit`

## Usage

```bash
pnpm add @profullstack/sh1pt-affiliate-cj
```

## Development

```bash
pnpm --filter @profullstack/sh1pt-affiliate-cj typecheck
```

Run tests from the repository root when this module includes a test file:

```bash
pnpm vitest run packages/affiliates/cj/src/index.test.ts
```
