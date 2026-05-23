# Sovrn Commerce (VigLink)

sh1pt module for Sovrn Commerce (VigLink).

## Package

- Name: `@profullstack/sh1pt-affiliate-sovrn`
- Path: `packages/affiliates/sovrn`
- Adapter ID: `affiliate-sovrn`
- Homepage: https://sh1pt.com

## Scripts

- `build`: `tsc -p tsconfig.json`
- `prepublishOnly`: `pnpm build`
- `typecheck`: `tsc -p tsconfig.json --noEmit`

## Usage

```bash
pnpm add @profullstack/sh1pt-affiliate-sovrn
```

## Development

```bash
pnpm --filter @profullstack/sh1pt-affiliate-sovrn typecheck
```

Run tests from the repository root when this module includes a test file:

```bash
pnpm vitest run packages/affiliates/sovrn/src/index.test.ts
```
