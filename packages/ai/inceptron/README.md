# Inceptron

sh1pt module for Inceptron.

## Package

- Name: `@profullstack/sh1pt-ai-inceptron`
- Path: `packages/ai/inceptron`
- Adapter ID: `ai-inceptron`
- Homepage: https://sh1pt.com

## Scripts

- `build`: `tsc -p tsconfig.json`
- `prepublishOnly`: `pnpm build`
- `typecheck`: `tsc -p tsconfig.json --noEmit`

## Usage

```bash
pnpm add @profullstack/sh1pt-ai-inceptron
```

## Development

```bash
pnpm --filter @profullstack/sh1pt-ai-inceptron typecheck
```

Run tests from the repository root when this module includes a test file:

```bash
pnpm vitest run packages/ai/inceptron/src/index.test.ts
```
