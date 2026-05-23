# Bugsink

Self-hosted error tracking.

## Package

- Name: `@profullstack/sh1pt-service-bugsink`
- Path: `services/bugsink`
- Adapter ID: `service-bugsink`
- Category: `observability`
- Homepage: https://sh1pt.com

## Scripts

- `build`: `tsc -p tsconfig.json`
- `prepublishOnly`: `pnpm build`
- `typecheck`: `tsc -p tsconfig.json --noEmit`

## Usage

```bash
pnpm add @profullstack/sh1pt-service-bugsink
```

## Development

```bash
pnpm --filter @profullstack/sh1pt-service-bugsink typecheck
```

Run tests from the repository root when this module includes a test file:

```bash
pnpm vitest run services/bugsink/src/index.test.ts
```
