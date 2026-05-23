# NextBit

sh1pt module for NextBit.

## Package

- Name: `@profullstack/sh1pt-ai-nextbit`
- Path: `packages/ai/nextbit`
- Adapter ID: `ai-nextbit`
- Homepage: https://sh1pt.com

## Scripts

- `build`: `tsc -p tsconfig.json`
- `prepublishOnly`: `pnpm build`
- `typecheck`: `tsc -p tsconfig.json --noEmit`

## Usage

```bash
pnpm add @profullstack/sh1pt-ai-nextbit
```

## Development

```bash
pnpm --filter @profullstack/sh1pt-ai-nextbit typecheck
```

Run tests from the repository root when this module includes a test file:

```bash
pnpm vitest run packages/ai/nextbit/src/index.test.ts
```
