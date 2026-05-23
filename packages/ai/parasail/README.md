# Parasail

sh1pt module for Parasail.

## Package

- Name: `@profullstack/sh1pt-ai-parasail`
- Path: `packages/ai/parasail`
- Adapter ID: `ai-parasail`
- Homepage: https://sh1pt.com

## Scripts

- `build`: `tsc -p tsconfig.json`
- `prepublishOnly`: `pnpm build`
- `typecheck`: `tsc -p tsconfig.json --noEmit`

## Usage

```bash
pnpm add @profullstack/sh1pt-ai-parasail
```

## Development

```bash
pnpm --filter @profullstack/sh1pt-ai-parasail typecheck
```

Run tests from the repository root when this module includes a test file:

```bash
pnpm vitest run packages/ai/parasail/src/index.test.ts
```
