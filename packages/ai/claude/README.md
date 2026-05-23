# Claude (Anthropic API)

sh1pt module for Claude (Anthropic API).

## Package

- Name: `@profullstack/sh1pt-ai-claude`
- Path: `packages/ai/claude`
- Adapter ID: `ai-claude`
- Homepage: https://sh1pt.com

## Scripts

- `build`: `tsc -p tsconfig.json`
- `prepublishOnly`: `pnpm build`
- `typecheck`: `tsc -p tsconfig.json --noEmit`

## Usage

```bash
pnpm add @profullstack/sh1pt-ai-claude
```

## Development

```bash
pnpm --filter @profullstack/sh1pt-ai-claude typecheck
```

Run tests from the repository root when this module includes a test file:

```bash
pnpm vitest run packages/ai/claude/src/index.test.ts
```
