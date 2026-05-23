# Argilla

Dataset collaboration tool for AI engineers.

## Package

- Name: `@profullstack/sh1pt-service-argilla`
- Path: `services/argilla`
- Adapter ID: `service-argilla`
- Category: `ai`
- Homepage: https://sh1pt.com

## Scripts

- `build`: `tsc -p tsconfig.json`
- `prepublishOnly`: `pnpm build`
- `typecheck`: `tsc -p tsconfig.json --noEmit`

## Usage

```bash
pnpm add @profullstack/sh1pt-service-argilla
```

## Development

```bash
pnpm --filter @profullstack/sh1pt-service-argilla typecheck
```

Run tests from the repository root when this module includes a test file:

```bash
pnpm vitest run services/argilla/src/index.test.ts
```
