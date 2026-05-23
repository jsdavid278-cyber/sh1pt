# Owncloud

File management with web UI.

## Package

- Name: `@profullstack/sh1pt-service-owncloud`
- Path: `services/owncloud`
- Adapter ID: `service-owncloud`
- Category: `files`
- Homepage: https://sh1pt.com

## Scripts

- `build`: `tsc -p tsconfig.json`
- `prepublishOnly`: `pnpm build`
- `typecheck`: `tsc -p tsconfig.json --noEmit`

## Usage

```bash
pnpm add @profullstack/sh1pt-service-owncloud
```

## Development

```bash
pnpm --filter @profullstack/sh1pt-service-owncloud typecheck
```

Run tests from the repository root when this module includes a test file:

```bash
pnpm vitest run services/owncloud/src/index.test.ts
```
