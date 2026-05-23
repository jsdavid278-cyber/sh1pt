# Minecraft

Game server with auto-update.

## Package

- Name: `@profullstack/sh1pt-service-minecraft`
- Path: `services/minecraft`
- Adapter ID: `service-minecraft`
- Category: `game`
- Homepage: https://sh1pt.com

## Scripts

- `build`: `tsc -p tsconfig.json`
- `prepublishOnly`: `pnpm build`
- `typecheck`: `tsc -p tsconfig.json --noEmit`

## Usage

```bash
pnpm add @profullstack/sh1pt-service-minecraft
```

## Development

```bash
pnpm --filter @profullstack/sh1pt-service-minecraft typecheck
```

Run tests from the repository root when this module includes a test file:

```bash
pnpm vitest run services/minecraft/src/index.test.ts
```
