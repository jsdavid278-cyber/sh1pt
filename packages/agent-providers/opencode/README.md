# Agent Provider Opencode

sh1pt module for Agent Provider Opencode.

## Package

- Name: `@profullstack/sh1pt-agent-provider-opencode`
- Path: `packages/agent-providers/opencode`
- Homepage: https://sh1pt.com

## Scripts

- `build`: `tsc -p tsconfig.json`
- `prepublishOnly`: `pnpm build`
- `typecheck`: `tsc -p tsconfig.json --noEmit`

## Usage

```bash
pnpm add @profullstack/sh1pt-agent-provider-opencode
```

## Development

```bash
pnpm --filter @profullstack/sh1pt-agent-provider-opencode typecheck
```

Run tests from the repository root when this module includes a test file:

```bash
pnpm vitest run packages/agent-providers/opencode/src/index.test.ts
```
