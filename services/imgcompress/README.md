# Imgcompress

Offline image compression and removal.

## Package

- Name: `@profullstack/sh1pt-service-imgcompress`
- Path: `services/imgcompress`
- Adapter ID: `service-imgcompress`
- Category: `tools`
- Homepage: https://sh1pt.com

## Scripts

- `build`: `tsc -p tsconfig.json`
- `prepublishOnly`: `pnpm build`
- `typecheck`: `tsc -p tsconfig.json --noEmit`

## Usage

```bash
pnpm add @profullstack/sh1pt-service-imgcompress
```

## Development

```bash
pnpm --filter @profullstack/sh1pt-service-imgcompress typecheck
```

Run tests from the repository root when this module includes a test file:

```bash
pnpm vitest run services/imgcompress/src/index.test.ts
```
