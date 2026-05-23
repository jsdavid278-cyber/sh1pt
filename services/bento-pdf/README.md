# Bento Pdf

Browser-based PDF processing.

## Package

- Name: `@profullstack/sh1pt-service-bento-pdf`
- Path: `services/bento-pdf`
- Adapter ID: `service-bento-pdf`
- Category: `tools`
- Homepage: https://sh1pt.com

## Scripts

- `build`: `tsc -p tsconfig.json`
- `prepublishOnly`: `pnpm build`
- `typecheck`: `tsc -p tsconfig.json --noEmit`

## Usage

```bash
pnpm add @profullstack/sh1pt-service-bento-pdf
```

## Development

```bash
pnpm --filter @profullstack/sh1pt-service-bento-pdf typecheck
```

Run tests from the repository root when this module includes a test file:

```bash
pnpm vitest run services/bento-pdf/src/index.test.ts
```
