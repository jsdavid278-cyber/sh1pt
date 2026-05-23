# Duplicati

Scheduled backup solution.

## Package

- Name: `@profullstack/sh1pt-service-duplicati`
- Path: `services/duplicati`
- Adapter ID: `service-duplicati`
- Category: `backup`
- Homepage: https://sh1pt.com

## Scripts

- `build`: `tsc -p tsconfig.json`
- `prepublishOnly`: `pnpm build`
- `typecheck`: `tsc -p tsconfig.json --noEmit`

## Usage

```bash
pnpm add @profullstack/sh1pt-service-duplicati
```

## Development

```bash
pnpm --filter @profullstack/sh1pt-service-duplicati typecheck
```

Run tests from the repository root when this module includes a test file:

```bash
pnpm vitest run services/duplicati/src/index.test.ts
```
