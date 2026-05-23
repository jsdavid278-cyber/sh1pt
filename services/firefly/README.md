# Firefly

Personal finances manager.

## Package

- Name: `@profullstack/sh1pt-service-firefly`
- Path: `services/firefly`
- Adapter ID: `service-firefly`
- Category: `finance`
- Homepage: https://sh1pt.com

## Scripts

- `build`: `tsc -p tsconfig.json`
- `prepublishOnly`: `pnpm build`
- `typecheck`: `tsc -p tsconfig.json --noEmit`

## Usage

```bash
pnpm add @profullstack/sh1pt-service-firefly
```

## Development

```bash
pnpm --filter @profullstack/sh1pt-service-firefly typecheck
```

Run tests from the repository root when this module includes a test file:

```bash
pnpm vitest run services/firefly/src/index.test.ts
```
