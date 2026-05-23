# Matrix

sh1pt module for Matrix.

## Package

- Name: `@profullstack/sh1pt-bridge-matrix`
- Path: `packages/bridges/matrix`
- Adapter ID: `bridge-matrix`
- Homepage: https://sh1pt.com

## Scripts

- `build`: `tsc -p tsconfig.json`
- `prepublishOnly`: `pnpm build`
- `typecheck`: `tsc -p tsconfig.json --noEmit`

## Usage

```bash
pnpm add @profullstack/sh1pt-bridge-matrix
```

## Development

```bash
pnpm --filter @profullstack/sh1pt-bridge-matrix typecheck
```

Run tests from the repository root when this module includes a test file:

```bash
pnpm vitest run packages/bridges/matrix/src/index.test.ts
```
