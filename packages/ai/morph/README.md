# Morph

sh1pt module for Morph.

## Package

- Name: `@profullstack/sh1pt-ai-morph`
- Path: `packages/ai/morph`
- Adapter ID: `ai-morph`
- Homepage: https://sh1pt.com

## Scripts

- `build`: `tsc -p tsconfig.json`
- `prepublishOnly`: `pnpm build`
- `typecheck`: `tsc -p tsconfig.json --noEmit`

## Usage

```bash
pnpm add @profullstack/sh1pt-ai-morph
```

## Development

```bash
pnpm --filter @profullstack/sh1pt-ai-morph typecheck
```

Run tests from the repository root when this module includes a test file:

```bash
pnpm vitest run packages/ai/morph/src/index.test.ts
```
