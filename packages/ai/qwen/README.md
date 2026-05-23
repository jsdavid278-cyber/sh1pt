# Qwen (Alibaba DashScope)

sh1pt module for Qwen (Alibaba DashScope).

## Package

- Name: `@profullstack/sh1pt-ai-qwen`
- Path: `packages/ai/qwen`
- Adapter ID: `ai-qwen`
- Homepage: https://sh1pt.com

## Scripts

- `build`: `tsc -p tsconfig.json`
- `prepublishOnly`: `pnpm build`
- `typecheck`: `tsc -p tsconfig.json --noEmit`

## Usage

```bash
pnpm add @profullstack/sh1pt-ai-qwen
```

## Development

```bash
pnpm --filter @profullstack/sh1pt-ai-qwen typecheck
```

Run tests from the repository root when this module includes a test file:

```bash
pnpm vitest run packages/ai/qwen/src/index.test.ts
```
