# Proxyscotch

CORS proxy server.

## Package

- Name: `@profullstack/sh1pt-service-proxyscotch`
- Path: `services/proxyscotch`
- Adapter ID: `service-proxyscotch`
- Category: `dev`
- Homepage: https://sh1pt.com

## Scripts

- `build`: `tsc -p tsconfig.json`
- `prepublishOnly`: `pnpm build`
- `typecheck`: `tsc -p tsconfig.json --noEmit`

## Usage

```bash
pnpm add @profullstack/sh1pt-service-proxyscotch
```

## Development

```bash
pnpm --filter @profullstack/sh1pt-service-proxyscotch typecheck
```

Run tests from the repository root when this module includes a test file:

```bash
pnpm vitest run services/proxyscotch/src/index.test.ts
```
