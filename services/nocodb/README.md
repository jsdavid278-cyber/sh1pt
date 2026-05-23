# Nocodb

Open-source Airtable alternative.

## Package

- Name: `@profullstack/sh1pt-service-nocodb`
- Path: `services/nocodb`
- Adapter ID: `service-nocodb`
- Category: `db`
- Homepage: https://sh1pt.com

## Scripts

- `build`: `tsc -p tsconfig.json`
- `prepublishOnly`: `pnpm build`
- `typecheck`: `tsc -p tsconfig.json --noEmit`

## Usage

```bash
pnpm add @profullstack/sh1pt-service-nocodb
```

## Development

```bash
pnpm --filter @profullstack/sh1pt-service-nocodb typecheck
```

Run tests from the repository root when this module includes a test file:

```bash
pnpm vitest run services/nocodb/src/index.test.ts
```
