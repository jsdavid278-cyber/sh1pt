# Metabase

Analytics with friendly UX.

## Package

- Name: `@profullstack/sh1pt-service-metabase`
- Path: `services/metabase`
- Adapter ID: `service-metabase`
- Category: `analytics`
- Homepage: https://sh1pt.com

## Scripts

- `build`: `tsc -p tsconfig.json`
- `prepublishOnly`: `pnpm build`
- `typecheck`: `tsc -p tsconfig.json --noEmit`

## Usage

```bash
pnpm add @profullstack/sh1pt-service-metabase
```

## Development

```bash
pnpm --filter @profullstack/sh1pt-service-metabase typecheck
```

Run tests from the repository root when this module includes a test file:

```bash
pnpm vitest run services/metabase/src/index.test.ts
```
