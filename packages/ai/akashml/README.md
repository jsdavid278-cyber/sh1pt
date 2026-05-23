# Akash ML

sh1pt module for Akash ML.

## Package

- Name: `@profullstack/sh1pt-ai-akashml`
- Path: `packages/ai/akashml`
- Adapter ID: `ai-akashml`
- Homepage: https://sh1pt.com

## Scripts

- `build`: `tsc -p tsconfig.json`
- `prepublishOnly`: `pnpm build`
- `typecheck`: `tsc -p tsconfig.json --noEmit`

## Usage

```bash
pnpm add @profullstack/sh1pt-ai-akashml
```

## Development

```bash
pnpm --filter @profullstack/sh1pt-ai-akashml typecheck
```

Run tests from the repository root when this module includes a test file:

```bash
pnpm vitest run packages/ai/akashml/src/index.test.ts
```
