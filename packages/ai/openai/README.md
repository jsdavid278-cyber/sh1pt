# OpenAI (GPT)

sh1pt module for OpenAI (GPT).

## Package

- Name: `@profullstack/sh1pt-ai-openai`
- Path: `packages/ai/openai`
- Adapter ID: `ai-openai`
- Homepage: https://sh1pt.com

## Scripts

- `build`: `tsc -p tsconfig.json`
- `prepublishOnly`: `pnpm build`
- `typecheck`: `tsc -p tsconfig.json --noEmit`

## Usage

```bash
pnpm add @profullstack/sh1pt-ai-openai
```

## Development

```bash
pnpm --filter @profullstack/sh1pt-ai-openai typecheck
```

Run tests from the repository root when this module includes a test file:

```bash
pnpm vitest run packages/ai/openai/src/index.test.ts
```
