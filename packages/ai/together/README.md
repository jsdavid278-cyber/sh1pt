# Together AI

sh1pt module for Together AI.

## Package

- Name: `@profullstack/sh1pt-ai-together`
- Path: `packages/ai/together`
- Adapter ID: `ai-together`
- Homepage: https://sh1pt.com

## Scripts

- `build`: `tsc -p tsconfig.json`
- `prepublishOnly`: `pnpm build`
- `typecheck`: `tsc -p tsconfig.json --noEmit`

## Usage

```bash
pnpm add @profullstack/sh1pt-ai-together
```

## Development

```bash
pnpm --filter @profullstack/sh1pt-ai-together typecheck
```

Run tests from the repository root when this module includes a test file:

```bash
pnpm vitest run packages/ai/together/src/index.test.ts
```
