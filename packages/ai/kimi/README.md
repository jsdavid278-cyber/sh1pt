# Kimi (Moonshot)

sh1pt module for Kimi (Moonshot).

## Package

- Name: `@profullstack/sh1pt-ai-kimi`
- Path: `packages/ai/kimi`
- Adapter ID: `ai-kimi`
- Homepage: https://sh1pt.com

## Scripts

- `build`: `tsc -p tsconfig.json`
- `prepublishOnly`: `pnpm build`
- `typecheck`: `tsc -p tsconfig.json --noEmit`

## Usage

```bash
pnpm add @profullstack/sh1pt-ai-kimi
```

## Development

```bash
pnpm --filter @profullstack/sh1pt-ai-kimi typecheck
```

Run tests from the repository root when this module includes a test file:

```bash
pnpm vitest run packages/ai/kimi/src/index.test.ts
```
