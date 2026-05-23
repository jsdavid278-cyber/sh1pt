# Miniflux

Minimalist feed reader.

## Package

- Name: `@profullstack/sh1pt-service-miniflux`
- Path: `services/miniflux`
- Adapter ID: `service-miniflux`
- Category: `productivity`
- Homepage: https://sh1pt.com

## Scripts

- `build`: `tsc -p tsconfig.json`
- `prepublishOnly`: `pnpm build`
- `typecheck`: `tsc -p tsconfig.json --noEmit`

## Usage

```bash
pnpm add @profullstack/sh1pt-service-miniflux
```

## Development

```bash
pnpm --filter @profullstack/sh1pt-service-miniflux typecheck
```

Run tests from the repository root when this module includes a test file:

```bash
pnpm vitest run services/miniflux/src/index.test.ts
```
