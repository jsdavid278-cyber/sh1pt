# Joomla With Mariadb

Website builder with MariaDB.

## Package

- Name: `@profullstack/sh1pt-service-joomla-with-mariadb`
- Path: `services/joomla-with-mariadb`
- Adapter ID: `service-joomla-with-mariadb`
- Category: `cms`
- Homepage: https://sh1pt.com

## Scripts

- `build`: `tsc -p tsconfig.json`
- `prepublishOnly`: `pnpm build`
- `typecheck`: `tsc -p tsconfig.json --noEmit`

## Usage

```bash
pnpm add @profullstack/sh1pt-service-joomla-with-mariadb
```

## Development

```bash
pnpm --filter @profullstack/sh1pt-service-joomla-with-mariadb typecheck
```

Run tests from the repository root when this module includes a test file:

```bash
pnpm vitest run services/joomla-with-mariadb/src/index.test.ts
```
