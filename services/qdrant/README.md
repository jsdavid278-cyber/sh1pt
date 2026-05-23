# Qdrant

Vector similarity search engine.

## Package

- Name: `@profullstack/sh1pt-service-qdrant`
- Path: `services/qdrant`
- Adapter ID: `service-qdrant`
- Category: `ai`
- Homepage: https://sh1pt.com

## Scripts

- `build`: `tsc -p tsconfig.json`
- `prepublishOnly`: `pnpm build`
- `typecheck`: `tsc -p tsconfig.json --noEmit`

## Usage

```bash
pnpm add @profullstack/sh1pt-service-qdrant
```

## Development

```bash
pnpm --filter @profullstack/sh1pt-service-qdrant typecheck
```

Run tests from the repository root when this module includes a test file:

```bash
pnpm vitest run services/qdrant/src/index.test.ts
```
