# Clarifai

sh1pt module for Clarifai.

## Package

- Name: `@profullstack/sh1pt-ai-clarifai`
- Path: `packages/ai/clarifai`
- Adapter ID: `ai-clarifai`
- Homepage: https://sh1pt.com

## Scripts

- `build`: `tsc -p tsconfig.json`
- `prepublishOnly`: `pnpm build`
- `typecheck`: `tsc -p tsconfig.json --noEmit`

## Usage

```bash
pnpm add @profullstack/sh1pt-ai-clarifai
```

## Development

```bash
pnpm --filter @profullstack/sh1pt-ai-clarifai typecheck
```

Run tests from the repository root when this module includes a test file:

```bash
pnpm vitest run packages/ai/clarifai/src/index.test.ts
```
