# Meilisearch

Powerful search engine.

## Package

- Name: `@profullstack/sh1pt-service-meilisearch`
- Path: `services/meilisearch`
- Adapter ID: `service-meilisearch`
- Category: `search`
- Homepage: https://sh1pt.com

## Scripts

- `build`: `tsc -p tsconfig.json`
- `prepublishOnly`: `pnpm build`
- `typecheck`: `tsc -p tsconfig.json --noEmit`

## Usage

```bash
pnpm add @profullstack/sh1pt-service-meilisearch
```

## Development

```bash
pnpm --filter @profullstack/sh1pt-service-meilisearch typecheck
```

Run tests from the repository root when this module includes a test file:

```bash
pnpm vitest run services/meilisearch/src/index.test.ts
```
