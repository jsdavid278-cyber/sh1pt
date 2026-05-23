# Jellyfin

Media server for content streaming.

## Package

- Name: `@profullstack/sh1pt-service-jellyfin`
- Path: `services/jellyfin`
- Adapter ID: `service-jellyfin`
- Category: `media`
- Homepage: https://sh1pt.com

## Scripts

- `build`: `tsc -p tsconfig.json`
- `prepublishOnly`: `pnpm build`
- `typecheck`: `tsc -p tsconfig.json --noEmit`

## Usage

```bash
pnpm add @profullstack/sh1pt-service-jellyfin
```

## Development

```bash
pnpm --filter @profullstack/sh1pt-service-jellyfin typecheck
```

Run tests from the repository root when this module includes a test file:

```bash
pnpm vitest run services/jellyfin/src/index.test.ts
```
