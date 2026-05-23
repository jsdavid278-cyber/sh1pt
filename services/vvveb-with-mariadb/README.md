# Vvveb With Mariadb

CMS with MariaDB.

## Package

- Name: `@profullstack/sh1pt-service-vvveb-with-mariadb`
- Path: `services/vvveb-with-mariadb`
- Adapter ID: `service-vvveb-with-mariadb`
- Category: `cms`
- Homepage: https://sh1pt.com

## Scripts

- `build`: `tsc -p tsconfig.json`
- `prepublishOnly`: `pnpm build`
- `typecheck`: `tsc -p tsconfig.json --noEmit`

## Usage

```bash
pnpm add @profullstack/sh1pt-service-vvveb-with-mariadb
```

## Development

```bash
pnpm --filter @profullstack/sh1pt-service-vvveb-with-mariadb typecheck
```

Run tests from the repository root when this module includes a test file:

```bash
pnpm vitest run services/vvveb-with-mariadb/src/index.test.ts
```
