# Bluesky Pds

Personal data server.

## Package

- Name: `@profullstack/sh1pt-service-bluesky-pds`
- Path: `services/bluesky-pds`
- Adapter ID: `service-bluesky-pds`
- Category: `social`
- Homepage: https://sh1pt.com

## Scripts

- `build`: `tsc -p tsconfig.json`
- `prepublishOnly`: `pnpm build`
- `typecheck`: `tsc -p tsconfig.json --noEmit`

## Usage

```bash
pnpm add @profullstack/sh1pt-service-bluesky-pds
```

## Development

```bash
pnpm --filter @profullstack/sh1pt-service-bluesky-pds typecheck
```

Run tests from the repository root when this module includes a test file:

```bash
pnpm vitest run services/bluesky-pds/src/index.test.ts
```
