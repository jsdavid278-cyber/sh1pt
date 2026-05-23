# Chutes

sh1pt module for Chutes.

## Package

- Name: `@profullstack/sh1pt-ai-chutes`
- Path: `packages/ai/chutes`
- Adapter ID: `ai-chutes`
- Homepage: https://sh1pt.com

## Scripts

- `build`: `tsc -p tsconfig.json`
- `prepublishOnly`: `pnpm build`
- `typecheck`: `tsc -p tsconfig.json --noEmit`

## Usage

```bash
pnpm add @profullstack/sh1pt-ai-chutes
```

## Development

```bash
pnpm --filter @profullstack/sh1pt-ai-chutes typecheck
```

Run tests from the repository root when this module includes a test file:

```bash
pnpm vitest run packages/ai/chutes/src/index.test.ts
```
