# Featherless

sh1pt module for Featherless.

## Package

- Name: `@profullstack/sh1pt-ai-featherless`
- Path: `packages/ai/featherless`
- Adapter ID: `ai-featherless`
- Homepage: https://sh1pt.com

## Scripts

- `build`: `tsc -p tsconfig.json`
- `prepublishOnly`: `pnpm build`
- `typecheck`: `tsc -p tsconfig.json --noEmit`

## Usage

```bash
pnpm add @profullstack/sh1pt-ai-featherless
```

## Development

```bash
pnpm --filter @profullstack/sh1pt-ai-featherless typecheck
```

Run tests from the repository root when this module includes a test file:

```bash
pnpm vitest run packages/ai/featherless/src/index.test.ts
```
