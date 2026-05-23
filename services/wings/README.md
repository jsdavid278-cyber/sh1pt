# Wings

Pterodactyl server control plane.

## Package

- Name: `@profullstack/sh1pt-service-wings`
- Path: `services/wings`
- Adapter ID: `service-wings`
- Category: `game`
- Homepage: https://sh1pt.com

## Scripts

- `build`: `tsc -p tsconfig.json`
- `prepublishOnly`: `pnpm build`
- `typecheck`: `tsc -p tsconfig.json --noEmit`

## Usage

```bash
pnpm add @profullstack/sh1pt-service-wings
```

## Development

```bash
pnpm --filter @profullstack/sh1pt-service-wings typecheck
```

Run tests from the repository root when this module includes a test file:

```bash
pnpm vitest run services/wings/src/index.test.ts
```
