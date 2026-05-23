# Seaweedfs

Distributed file system with S3.

## Package

- Name: `@profullstack/sh1pt-service-seaweedfs`
- Path: `services/seaweedfs`
- Adapter ID: `service-seaweedfs`
- Category: `storage`
- Homepage: https://sh1pt.com

## Scripts

- `build`: `tsc -p tsconfig.json`
- `prepublishOnly`: `pnpm build`
- `typecheck`: `tsc -p tsconfig.json --noEmit`

## Usage

```bash
pnpm add @profullstack/sh1pt-service-seaweedfs
```

## Development

```bash
pnpm --filter @profullstack/sh1pt-service-seaweedfs typecheck
```

Run tests from the repository root when this module includes a test file:

```bash
pnpm vitest run services/seaweedfs/src/index.test.ts
```
