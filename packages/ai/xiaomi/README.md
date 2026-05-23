# Xiaomi MiMo

sh1pt module for Xiaomi MiMo.

## Package

- Name: `@profullstack/sh1pt-ai-xiaomi`
- Path: `packages/ai/xiaomi`
- Adapter ID: `ai-xiaomi`
- Homepage: https://sh1pt.com

## Scripts

- `build`: `tsc -p tsconfig.json`
- `prepublishOnly`: `pnpm build`
- `typecheck`: `tsc -p tsconfig.json --noEmit`

## Usage

```bash
pnpm add @profullstack/sh1pt-ai-xiaomi
```

## Development

```bash
pnpm --filter @profullstack/sh1pt-ai-xiaomi typecheck
```

Run tests from the repository root when this module includes a test file:

```bash
pnpm vitest run packages/ai/xiaomi/src/index.test.ts
```
