# Elasticsearch

Distributed search engine.

## Package

- Name: `@profullstack/sh1pt-service-elasticsearch`
- Path: `services/elasticsearch`
- Adapter ID: `service-elasticsearch`
- Category: `search`
- Homepage: https://sh1pt.com

## Scripts

- `build`: `tsc -p tsconfig.json`
- `prepublishOnly`: `pnpm build`
- `typecheck`: `tsc -p tsconfig.json --noEmit`

## Usage

```bash
pnpm add @profullstack/sh1pt-service-elasticsearch
```

## Development

```bash
pnpm --filter @profullstack/sh1pt-service-elasticsearch typecheck
```

Run tests from the repository root when this module includes a test file:

```bash
pnpm vitest run services/elasticsearch/src/index.test.ts
```
