# OpenAI Codex CLI

sh1pt module for OpenAI Codex CLI.

## Package

- Name: `@profullstack/sh1pt-agent-codex`
- Path: `packages/agents/codex`
- Adapter ID: `agent-codex`
- Homepage: https://sh1pt.com

## Scripts

- `build`: `tsc -p tsconfig.json`
- `prepublishOnly`: `pnpm build`
- `typecheck`: `tsc -p tsconfig.json --noEmit`

## Usage

```bash
pnpm add @profullstack/sh1pt-agent-codex
```

## Development

```bash
pnpm --filter @profullstack/sh1pt-agent-codex typecheck
```

Run tests from the repository root when this module includes a test file:

```bash
pnpm vitest run packages/agents/codex/src/index.test.ts
```
