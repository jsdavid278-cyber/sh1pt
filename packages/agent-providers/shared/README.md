# Agent Provider Shared

sh1pt module for Agent Provider Shared.

## Package

- Name: `@profullstack/sh1pt-agent-provider-shared`
- Path: `packages/agent-providers/shared`
- Homepage: https://sh1pt.com

## Scripts

- `build`: `tsc -p tsconfig.json`
- `prepublishOnly`: `pnpm build`
- `typecheck`: `tsc -p tsconfig.json --noEmit`

## Usage

```bash
pnpm add @profullstack/sh1pt-agent-provider-shared
```

## Development

```bash
pnpm --filter @profullstack/sh1pt-agent-provider-shared typecheck
```

Run tests from the repository root when this module includes a test file:

```bash
pnpm vitest run packages/agent-providers/shared/src/index.test.ts
```
