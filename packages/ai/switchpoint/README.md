# Switchpoint

sh1pt module for Switchpoint.

## Package

- Name: `@profullstack/sh1pt-ai-switchpoint`
- Path: `packages/ai/switchpoint`
- Adapter ID: `ai-switchpoint`
- Homepage: https://sh1pt.com

## Scripts

- `build`: `tsc -p tsconfig.json`
- `prepublishOnly`: `pnpm build`
- `typecheck`: `tsc -p tsconfig.json --noEmit`

## Usage

```bash
pnpm add @profullstack/sh1pt-ai-switchpoint
```

## Development

```bash
pnpm --filter @profullstack/sh1pt-ai-switchpoint typecheck
```

Run tests from the repository root when this module includes a test file:

```bash
pnpm vitest run packages/ai/switchpoint/src/index.test.ts
```
