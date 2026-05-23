# Qbittorrent

Open-source torrent client.

## Package

- Name: `@profullstack/sh1pt-service-qbittorrent`
- Path: `services/qbittorrent`
- Adapter ID: `service-qbittorrent`
- Category: `files`
- Homepage: https://sh1pt.com

## Scripts

- `build`: `tsc -p tsconfig.json`
- `prepublishOnly`: `pnpm build`
- `typecheck`: `tsc -p tsconfig.json --noEmit`

## Usage

```bash
pnpm add @profullstack/sh1pt-service-qbittorrent
```

## Development

```bash
pnpm --filter @profullstack/sh1pt-service-qbittorrent typecheck
```

Run tests from the repository root when this module includes a test file:

```bash
pnpm vitest run services/qbittorrent/src/index.test.ts
```
