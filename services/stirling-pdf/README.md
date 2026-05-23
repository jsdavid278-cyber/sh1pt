# Stirling Pdf

Web-based PDF manipulation.

## Package

- Name: `@profullstack/sh1pt-service-stirling-pdf`
- Path: `services/stirling-pdf`
- Adapter ID: `service-stirling-pdf`
- Category: `tools`
- Homepage: https://sh1pt.com

## Scripts

- `build`: `tsc -p tsconfig.json`
- `prepublishOnly`: `pnpm build`
- `typecheck`: `tsc -p tsconfig.json --noEmit`

## Usage

```bash
pnpm add @profullstack/sh1pt-service-stirling-pdf
```

## Development

```bash
pnpm --filter @profullstack/sh1pt-service-stirling-pdf typecheck
```

Run tests from the repository root when this module includes a test file:

```bash
pnpm vitest run services/stirling-pdf/src/index.test.ts
```
