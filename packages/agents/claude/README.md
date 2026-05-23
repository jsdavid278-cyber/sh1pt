# Claude Code (Anthropic)

sh1pt module for Claude Code (Anthropic).

## Package

- Name: `@profullstack/sh1pt-agent-claude`
- Path: `packages/agents/claude`
- Adapter ID: `agent-claude`
- Homepage: https://sh1pt.com

## Scripts

- `build`: `tsc -p tsconfig.json`
- `prepublishOnly`: `pnpm build`
- `typecheck`: `tsc -p tsconfig.json --noEmit`

## Usage

```bash
pnpm add @profullstack/sh1pt-agent-claude
```

## Development

```bash
pnpm --filter @profullstack/sh1pt-agent-claude typecheck
```

Run tests from the repository root when this module includes a test file:

```bash
pnpm vitest run packages/agents/claude/src/index.test.ts
```
