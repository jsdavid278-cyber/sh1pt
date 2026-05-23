# Freshrss With Mariadb

Feed aggregator with MariaDB.

## Package

- Name: `@profullstack/sh1pt-service-freshrss-with-mariadb`
- Path: `services/freshrss-with-mariadb`
- Adapter ID: `service-freshrss-with-mariadb`
- Category: `productivity`
- Homepage: https://sh1pt.com

## Scripts

- `build`: `tsc -p tsconfig.json`
- `prepublishOnly`: `pnpm build`
- `typecheck`: `tsc -p tsconfig.json --noEmit`

## Usage

```bash
pnpm add @profullstack/sh1pt-service-freshrss-with-mariadb
```

## Development

```bash
pnpm --filter @profullstack/sh1pt-service-freshrss-with-mariadb typecheck
```

Run tests from the repository root when this module includes a test file:

```bash
pnpm vitest run services/freshrss-with-mariadb/src/index.test.ts
```
