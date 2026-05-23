# Redlib

Private Reddit alternative.

## Package

- Name: `@profullstack/sh1pt-service-redlib`
- Path: `services/redlib`
- Adapter ID: `service-redlib`
- Category: `social`
- Homepage: https://sh1pt.com

## Scripts

- `build`: `tsc -p tsconfig.json`
- `prepublishOnly`: `pnpm build`
- `typecheck`: `tsc -p tsconfig.json --noEmit`

## Usage

```bash
pnpm add @profullstack/sh1pt-service-redlib
```

## Development

```bash
pnpm --filter @profullstack/sh1pt-service-redlib typecheck
```

Run tests from the repository root when this module includes a test file:

```bash
pnpm vitest run services/redlib/src/index.test.ts
```
