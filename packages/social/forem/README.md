# Forem (self-hosted)

sh1pt module for Forem (self-hosted).

## Package

- Name: `@profullstack/sh1pt-social-forem`
- Path: `packages/social/forem`
- Adapter ID: `social-forem`
- Homepage: https://sh1pt.com

## Scripts

- `build`: `tsc -p tsconfig.json`
- `prepublishOnly`: `pnpm build`
- `typecheck`: `tsc -p tsconfig.json --noEmit`

## Usage

```bash
pnpm add @profullstack/sh1pt-social-forem
```

## Development

```bash
pnpm --filter @profullstack/sh1pt-social-forem typecheck
```

Run tests from the repository root when this module includes a test file:

```bash
pnpm vitest run packages/social/forem/src/index.test.ts
```
