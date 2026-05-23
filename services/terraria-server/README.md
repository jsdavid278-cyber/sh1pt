# Terraria Server

Multi-arch game server.

## Package

- Name: `@profullstack/sh1pt-service-terraria-server`
- Path: `services/terraria-server`
- Adapter ID: `service-terraria-server`
- Category: `game`
- Homepage: https://sh1pt.com

## Scripts

- `build`: `tsc -p tsconfig.json`
- `prepublishOnly`: `pnpm build`
- `typecheck`: `tsc -p tsconfig.json --noEmit`

## Usage

```bash
pnpm add @profullstack/sh1pt-service-terraria-server
```

## Development

```bash
pnpm --filter @profullstack/sh1pt-service-terraria-server typecheck
```

Run tests from the repository root when this module includes a test file:

```bash
pnpm vitest run services/terraria-server/src/index.test.ts
```
