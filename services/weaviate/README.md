# Weaviate

Vector database with filtering.

## Package

- Name: `@profullstack/sh1pt-service-weaviate`
- Path: `services/weaviate`
- Adapter ID: `service-weaviate`
- Category: `ai`
- Homepage: https://sh1pt.com

## Scripts

- `build`: `tsc -p tsconfig.json`
- `prepublishOnly`: `pnpm build`
- `typecheck`: `tsc -p tsconfig.json --noEmit`

## Usage

```bash
pnpm add @profullstack/sh1pt-service-weaviate
```

## Development

```bash
pnpm --filter @profullstack/sh1pt-service-weaviate typecheck
```

Run tests from the repository root when this module includes a test file:

```bash
pnpm vitest run services/weaviate/src/index.test.ts
```
