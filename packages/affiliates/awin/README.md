# Awin

sh1pt module for Awin.

## Package

- Name: `@profullstack/sh1pt-affiliate-awin`
- Path: `packages/affiliates/awin`
- Adapter ID: `affiliate-awin`
- Homepage: https://sh1pt.com

## Scripts

- `build`: `tsc -p tsconfig.json`
- `prepublishOnly`: `pnpm build`
- `typecheck`: `tsc -p tsconfig.json --noEmit`

## Usage

```bash
pnpm add @profullstack/sh1pt-affiliate-awin
```

## Development

```bash
pnpm --filter @profullstack/sh1pt-affiliate-awin typecheck
```

Run tests from the repository root when this module includes a test file:

```bash
pnpm vitest run packages/affiliates/awin/src/index.test.ts
```
