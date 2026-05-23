# Searxng

Metasearch engine aggregating 70+ services.

## Package

- Name: `@profullstack/sh1pt-service-searxng`
- Path: `services/searxng`
- Adapter ID: `service-searxng`
- Category: `search`
- Homepage: https://sh1pt.com

## Scripts

- `build`: `tsc -p tsconfig.json`
- `prepublishOnly`: `pnpm build`
- `typecheck`: `tsc -p tsconfig.json --noEmit`

## Usage

```bash
pnpm add @profullstack/sh1pt-service-searxng
```

## Development

```bash
pnpm --filter @profullstack/sh1pt-service-searxng typecheck
```

Run tests from the repository root when this module includes a test file:

```bash
pnpm vitest run services/searxng/src/index.test.ts
```
