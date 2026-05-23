# Palworld

Game server hosting.

## Package

- Name: `@profullstack/sh1pt-service-palworld`
- Path: `services/palworld`
- Adapter ID: `service-palworld`
- Category: `game`
- Homepage: https://sh1pt.com

## Scripts

- `build`: `tsc -p tsconfig.json`
- `prepublishOnly`: `pnpm build`
- `typecheck`: `tsc -p tsconfig.json --noEmit`

## Usage

```bash
pnpm add @profullstack/sh1pt-service-palworld
```

## Development

```bash
pnpm --filter @profullstack/sh1pt-service-palworld typecheck
```

Run tests from the repository root when this module includes a test file:

```bash
pnpm vitest run services/palworld/src/index.test.ts
```
