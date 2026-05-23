# Dashy

Self-hosted personal dashboard.

## Package

- Name: `@profullstack/sh1pt-service-dashy`
- Path: `services/dashy`
- Adapter ID: `service-dashy`
- Category: `dashboard`
- Homepage: https://sh1pt.com

## Scripts

- `build`: `tsc -p tsconfig.json`
- `prepublishOnly`: `pnpm build`
- `typecheck`: `tsc -p tsconfig.json --noEmit`

## Usage

```bash
pnpm add @profullstack/sh1pt-service-dashy
```

## Development

```bash
pnpm --filter @profullstack/sh1pt-service-dashy typecheck
```

Run tests from the repository root when this module includes a test file:

```bash
pnpm vitest run services/dashy/src/index.test.ts
```
