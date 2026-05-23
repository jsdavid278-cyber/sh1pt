# Baidu Qianfan

sh1pt module for Baidu Qianfan.

## Package

- Name: `@profullstack/sh1pt-ai-baidu`
- Path: `packages/ai/baidu`
- Adapter ID: `ai-baidu`
- Homepage: https://sh1pt.com

## Scripts

- `build`: `tsc -p tsconfig.json`
- `prepublishOnly`: `pnpm build`
- `typecheck`: `tsc -p tsconfig.json --noEmit`

## Usage

```bash
pnpm add @profullstack/sh1pt-ai-baidu
```

## Development

```bash
pnpm --filter @profullstack/sh1pt-ai-baidu typecheck
```

Run tests from the repository root when this module includes a test file:

```bash
pnpm vitest run packages/ai/baidu/src/index.test.ts
```
