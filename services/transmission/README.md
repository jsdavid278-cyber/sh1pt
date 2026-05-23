# Transmission

BitTorrent client.

## Package

- Name: `@profullstack/sh1pt-service-transmission`
- Path: `services/transmission`
- Adapter ID: `service-transmission`
- Category: `files`
- Homepage: https://sh1pt.com

## Scripts

- `build`: `tsc -p tsconfig.json`
- `prepublishOnly`: `pnpm build`
- `typecheck`: `tsc -p tsconfig.json --noEmit`

## Usage

```bash
pnpm add @profullstack/sh1pt-service-transmission
```

## Development

```bash
pnpm --filter @profullstack/sh1pt-service-transmission typecheck
```

Run tests from the repository root when this module includes a test file:

```bash
pnpm vitest run services/transmission/src/index.test.ts
```
