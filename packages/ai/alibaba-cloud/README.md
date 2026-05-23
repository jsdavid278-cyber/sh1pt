# Alibaba Cloud Model Studio

sh1pt module for Alibaba Cloud Model Studio.

## Package

- Name: `@profullstack/sh1pt-ai-alibaba-cloud`
- Path: `packages/ai/alibaba-cloud`
- Adapter ID: `ai-alibaba-cloud`
- Homepage: https://sh1pt.com

## Scripts

- `build`: `tsc -p tsconfig.json`
- `prepublishOnly`: `pnpm build`
- `typecheck`: `tsc -p tsconfig.json --noEmit`

## Usage

```bash
pnpm add @profullstack/sh1pt-ai-alibaba-cloud
```

## Development

```bash
pnpm --filter @profullstack/sh1pt-ai-alibaba-cloud typecheck
```

Run tests from the repository root when this module includes a test file:

```bash
pnpm vitest run packages/ai/alibaba-cloud/src/index.test.ts
```
