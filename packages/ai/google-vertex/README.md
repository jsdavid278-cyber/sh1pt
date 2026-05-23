# Google Vertex AI

sh1pt module for Google Vertex AI.

## Package

- Name: `@profullstack/sh1pt-ai-google-vertex`
- Path: `packages/ai/google-vertex`
- Adapter ID: `ai-google-vertex`
- Homepage: https://sh1pt.com

## Scripts

- `build`: `tsc -p tsconfig.json`
- `prepublishOnly`: `pnpm build`
- `typecheck`: `tsc -p tsconfig.json --noEmit`

## Usage

```bash
pnpm add @profullstack/sh1pt-ai-google-vertex
```

## Development

```bash
pnpm --filter @profullstack/sh1pt-ai-google-vertex typecheck
```

Run tests from the repository root when this module includes a test file:

```bash
pnpm vitest run packages/ai/google-vertex/src/index.test.ts
```
