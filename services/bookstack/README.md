# Bookstack

Self-hosted information organization platform.

## Package

- Name: `@profullstack/sh1pt-service-bookstack`
- Path: `services/bookstack`
- Adapter ID: `service-bookstack`
- Category: `wiki`
- Homepage: https://sh1pt.com

## Scripts

- `build`: `tsc -p tsconfig.json`
- `prepublishOnly`: `pnpm build`
- `typecheck`: `tsc -p tsconfig.json --noEmit`

## Usage

```bash
pnpm add @profullstack/sh1pt-service-bookstack
```

## Development

```bash
pnpm --filter @profullstack/sh1pt-service-bookstack typecheck
```

Run tests from the repository root when this module includes a test file:

```bash
pnpm vitest run services/bookstack/src/index.test.ts
```
