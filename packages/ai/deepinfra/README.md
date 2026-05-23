# DeepInfra

sh1pt module for DeepInfra.

## Package

- Name: `@profullstack/sh1pt-ai-deepinfra`
- Path: `packages/ai/deepinfra`
- Adapter ID: `ai-deepinfra`
- Homepage: https://sh1pt.com

## Scripts

- `build`: `tsc -p tsconfig.json`
- `prepublishOnly`: `pnpm build`
- `typecheck`: `tsc -p tsconfig.json --noEmit`

## Usage

```bash
pnpm add @profullstack/sh1pt-ai-deepinfra
```

## Development

```bash
pnpm --filter @profullstack/sh1pt-ai-deepinfra typecheck
```

Run tests from the repository root when this module includes a test file:

```bash
pnpm vitest run packages/ai/deepinfra/src/index.test.ts
```
