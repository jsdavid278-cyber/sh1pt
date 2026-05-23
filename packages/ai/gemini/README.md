# Gemini (Google AI Studio)

sh1pt module for Gemini (Google AI Studio).

## Package

- Name: `@profullstack/sh1pt-ai-gemini`
- Path: `packages/ai/gemini`
- Adapter ID: `ai-gemini`
- Homepage: https://sh1pt.com

## Scripts

- `build`: `tsc -p tsconfig.json`
- `prepublishOnly`: `pnpm build`
- `typecheck`: `tsc -p tsconfig.json --noEmit`

## Usage

```bash
pnpm add @profullstack/sh1pt-ai-gemini
```

## Development

```bash
pnpm --filter @profullstack/sh1pt-ai-gemini typecheck
```

Run tests from the repository root when this module includes a test file:

```bash
pnpm vitest run packages/ai/gemini/src/index.test.ts
```
