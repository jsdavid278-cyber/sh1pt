# Matrix

sh1pt module for Matrix.

## Package

- Name: `@profullstack/sh1pt-bot-matrix`
- Path: `packages/bots/matrix`
- Adapter ID: `empty`
- Homepage: https://sh1pt.com

## Scripts

- `build`: `tsc -p tsconfig.json`
- `prepublishOnly`: `pnpm build`
- `typecheck`: `tsc -p tsconfig.json --noEmit`

## Usage

```bash
pnpm add @profullstack/sh1pt-bot-matrix
```

## Development

```bash
pnpm --filter @profullstack/sh1pt-bot-matrix typecheck
```

Run tests from the repository root when this module includes a test file:

```bash
pnpm vitest run packages/bots/matrix/src/index.test.ts
```
