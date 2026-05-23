# Refersion

sh1pt module for Refersion.

## Package

- Name: `@profullstack/sh1pt-affiliate-refersion`
- Path: `packages/affiliates/refersion`
- Adapter ID: `affiliate-refersion`
- Homepage: https://sh1pt.com

## Scripts

- `build`: `tsc -p tsconfig.json`
- `prepublishOnly`: `pnpm build`
- `typecheck`: `tsc -p tsconfig.json --noEmit`

## Usage

```bash
pnpm add @profullstack/sh1pt-affiliate-refersion
```

## Development

```bash
pnpm --filter @profullstack/sh1pt-affiliate-refersion typecheck
```

Run tests from the repository root when this module includes a test file:

```bash
pnpm vitest run packages/affiliates/refersion/src/index.test.ts
```
