# Freshrss

Self-hostable feed aggregator.

## Package

- Name: `@profullstack/sh1pt-service-freshrss`
- Path: `services/freshrss`
- Adapter ID: `service-freshrss`
- Category: `productivity`
- Homepage: https://sh1pt.com

## Scripts

- `build`: `tsc -p tsconfig.json`
- `prepublishOnly`: `pnpm build`
- `typecheck`: `tsc -p tsconfig.json --noEmit`

## Usage

```bash
pnpm add @profullstack/sh1pt-service-freshrss
```

## Development

```bash
pnpm --filter @profullstack/sh1pt-service-freshrss typecheck
```

Run tests from the repository root when this module includes a test file:

```bash
pnpm vitest run services/freshrss/src/index.test.ts
```
