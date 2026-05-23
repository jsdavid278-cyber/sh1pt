# Checkmate

Server and website monitoring application.

## Package

- Name: `@profullstack/sh1pt-service-checkmate`
- Path: `services/checkmate`
- Adapter ID: `service-checkmate`
- Category: `monitoring`
- Homepage: https://sh1pt.com

## Scripts

- `build`: `tsc -p tsconfig.json`
- `prepublishOnly`: `pnpm build`
- `typecheck`: `tsc -p tsconfig.json --noEmit`

## Usage

```bash
pnpm add @profullstack/sh1pt-service-checkmate
```

## Development

```bash
pnpm --filter @profullstack/sh1pt-service-checkmate typecheck
```

Run tests from the repository root when this module includes a test file:

```bash
pnpm vitest run services/checkmate/src/index.test.ts
```
