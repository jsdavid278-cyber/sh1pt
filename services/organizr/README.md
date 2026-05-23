# Organizr

Homelab services organizer.

## Package

- Name: `@profullstack/sh1pt-service-organizr`
- Path: `services/organizr`
- Adapter ID: `service-organizr`
- Category: `dashboard`
- Homepage: https://sh1pt.com

## Scripts

- `build`: `tsc -p tsconfig.json`
- `prepublishOnly`: `pnpm build`
- `typecheck`: `tsc -p tsconfig.json --noEmit`

## Usage

```bash
pnpm add @profullstack/sh1pt-service-organizr
```

## Development

```bash
pnpm --filter @profullstack/sh1pt-service-organizr typecheck
```

Run tests from the repository root when this module includes a test file:

```bash
pnpm vitest run services/organizr/src/index.test.ts
```
