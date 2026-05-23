# Penpot With S3

Design platform with S3 storage.

## Package

- Name: `@profullstack/sh1pt-service-penpot-with-s3`
- Path: `services/penpot-with-s3`
- Adapter ID: `service-penpot-with-s3`
- Category: `design`
- Homepage: https://sh1pt.com

## Scripts

- `build`: `tsc -p tsconfig.json`
- `prepublishOnly`: `pnpm build`
- `typecheck`: `tsc -p tsconfig.json --noEmit`

## Usage

```bash
pnpm add @profullstack/sh1pt-service-penpot-with-s3
```

## Development

```bash
pnpm --filter @profullstack/sh1pt-service-penpot-with-s3 typecheck
```

Run tests from the repository root when this module includes a test file:

```bash
pnpm vitest run services/penpot-with-s3/src/index.test.ts
```
