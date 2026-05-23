# Qwen Code (Alibaba)

sh1pt module for Qwen Code (Alibaba).

## Package

- Name: `@profullstack/sh1pt-agent-qwen`
- Path: `packages/agents/qwen`
- Adapter ID: `agent-qwen`
- Homepage: https://sh1pt.com

## Scripts

- `build`: `tsc -p tsconfig.json`
- `prepublishOnly`: `pnpm build`
- `typecheck`: `tsc -p tsconfig.json --noEmit`

## Usage

```bash
pnpm add @profullstack/sh1pt-agent-qwen
```

## Development

```bash
pnpm --filter @profullstack/sh1pt-agent-qwen typecheck
```

Run tests from the repository root when this module includes a test file:

```bash
pnpm vitest run packages/agents/qwen/src/index.test.ts
```
