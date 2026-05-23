# Quora

sh1pt module for Quora.

## Package

- Name: `@profullstack/sh1pt-social-quora`
- Path: `packages/social/quora`
- Adapter ID: `social-quora`
- Homepage: https://sh1pt.com

## Scripts

- `build`: `tsc -p tsconfig.json`
- `prepublishOnly`: `pnpm build`
- `typecheck`: `tsc -p tsconfig.json --noEmit`

## Usage

```bash
pnpm add @profullstack/sh1pt-social-quora
```

## Development

```bash
pnpm --filter @profullstack/sh1pt-social-quora typecheck
```

Run tests from the repository root when this module includes a test file:

```bash
pnpm vitest run packages/social/quora/src/index.test.ts
```
