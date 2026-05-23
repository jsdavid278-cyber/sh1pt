# Seafile

Cloud storage and document collaboration.

## Package

- Name: `@profullstack/sh1pt-service-seafile`
- Path: `services/seafile`
- Adapter ID: `service-seafile`
- Category: `files`
- Homepage: https://sh1pt.com

## Scripts

- `build`: `tsc -p tsconfig.json`
- `prepublishOnly`: `pnpm build`
- `typecheck`: `tsc -p tsconfig.json --noEmit`

## Usage

```bash
pnpm add @profullstack/sh1pt-service-seafile
```

## Development

```bash
pnpm --filter @profullstack/sh1pt-service-seafile typecheck
```

Run tests from the repository root when this module includes a test file:

```bash
pnpm vitest run services/seafile/src/index.test.ts
```
