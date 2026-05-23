# Cerebras

sh1pt module for Cerebras.

## Package

- Name: `@profullstack/sh1pt-ai-cerebras`
- Path: `packages/ai/cerebras`
- Adapter ID: `ai-cerebras`
- Homepage: https://sh1pt.com

## Scripts

- `build`: `tsc -p tsconfig.json`
- `prepublishOnly`: `pnpm build`
- `typecheck`: `tsc -p tsconfig.json --noEmit`

## Usage

```bash
pnpm add @profullstack/sh1pt-ai-cerebras
```

## Development

```bash
pnpm --filter @profullstack/sh1pt-ai-cerebras typecheck
```

Run tests from the repository root when this module includes a test file:

```bash
pnpm vitest run packages/ai/cerebras/src/index.test.ts
```
