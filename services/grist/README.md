# Grist

Modern relational spreadsheet.

## Package

- Name: `@profullstack/sh1pt-service-grist`
- Path: `services/grist`
- Adapter ID: `service-grist`
- Category: `productivity`
- Homepage: https://sh1pt.com

## Scripts

- `build`: `tsc -p tsconfig.json`
- `prepublishOnly`: `pnpm build`
- `typecheck`: `tsc -p tsconfig.json --noEmit`

## Usage

```bash
pnpm add @profullstack/sh1pt-service-grist
```

## Development

```bash
pnpm --filter @profullstack/sh1pt-service-grist typecheck
```

Run tests from the repository root when this module includes a test file:

```bash
pnpm vitest run services/grist/src/index.test.ts
```
