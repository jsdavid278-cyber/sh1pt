# Sentry

sh1pt module for Sentry.

## Package

- Name: `@profullstack/sh1pt-observability-sentry`
- Path: `packages/observability/sentry`
- Adapter ID: `observability-sentry`
- Homepage: https://sh1pt.com

## Scripts

- `build`: `tsc -p tsconfig.json`
- `prepublishOnly`: `pnpm build`
- `typecheck`: `tsc -p tsconfig.json --noEmit`

## Usage

```bash
pnpm add @profullstack/sh1pt-observability-sentry
```

## Development

```bash
pnpm --filter @profullstack/sh1pt-observability-sentry typecheck
```

Run tests from the repository root when this module includes a test file:

```bash
pnpm vitest run packages/observability/sentry/src/index.test.ts
```
