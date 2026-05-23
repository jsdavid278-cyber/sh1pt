# Foundryvtt

Self-hosted roleplaying tabletop platform.

## Package

- Name: `@profullstack/sh1pt-service-foundryvtt`
- Path: `services/foundryvtt`
- Adapter ID: `service-foundryvtt`
- Category: `game`
- Homepage: https://sh1pt.com

## Scripts

- `build`: `tsc -p tsconfig.json`
- `prepublishOnly`: `pnpm build`
- `typecheck`: `tsc -p tsconfig.json --noEmit`

## Usage

```bash
pnpm add @profullstack/sh1pt-service-foundryvtt
```

## Development

```bash
pnpm --filter @profullstack/sh1pt-service-foundryvtt typecheck
```

Run tests from the repository root when this module includes a test file:

```bash
pnpm vitest run services/foundryvtt/src/index.test.ts
```
