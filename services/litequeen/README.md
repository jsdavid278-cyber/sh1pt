# Litequeen

SQLite database management software.

## Package

- Name: `@profullstack/sh1pt-service-litequeen`
- Path: `services/litequeen`
- Adapter ID: `service-litequeen`
- Category: `db`
- Homepage: https://sh1pt.com

## Scripts

- `build`: `tsc -p tsconfig.json`
- `prepublishOnly`: `pnpm build`
- `typecheck`: `tsc -p tsconfig.json --noEmit`

## Usage

```bash
pnpm add @profullstack/sh1pt-service-litequeen
```

## Development

```bash
pnpm --filter @profullstack/sh1pt-service-litequeen typecheck
```

Run tests from the repository root when this module includes a test file:

```bash
pnpm vitest run services/litequeen/src/index.test.ts
```
