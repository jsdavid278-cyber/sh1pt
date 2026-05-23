# xAI

sh1pt module for xAI.

## Package

- Name: `@profullstack/sh1pt-ai-xai`
- Path: `packages/ai/xai`
- Adapter ID: `ai-xai`
- Homepage: https://sh1pt.com

## Scripts

- `build`: `tsc -p tsconfig.json`
- `prepublishOnly`: `pnpm build`
- `typecheck`: `tsc -p tsconfig.json --noEmit`

## Usage

```bash
pnpm add @profullstack/sh1pt-ai-xai
```

## Development

```bash
pnpm --filter @profullstack/sh1pt-ai-xai typecheck
```

Run tests from the repository root when this module includes a test file:

```bash
pnpm vitest run packages/ai/xai/src/index.test.ts
```
