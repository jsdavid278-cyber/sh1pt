# Forgejo With Mariadb

Software forge with MariaDB.

## Package

- Name: `@profullstack/sh1pt-service-forgejo-with-mariadb`
- Path: `services/forgejo-with-mariadb`
- Adapter ID: `service-forgejo-with-mariadb`
- Category: `vcs`
- Homepage: https://sh1pt.com

## Scripts

- `build`: `tsc -p tsconfig.json`
- `prepublishOnly`: `pnpm build`
- `typecheck`: `tsc -p tsconfig.json --noEmit`

## Usage

```bash
pnpm add @profullstack/sh1pt-service-forgejo-with-mariadb
```

## Development

```bash
pnpm --filter @profullstack/sh1pt-service-forgejo-with-mariadb typecheck
```

Run tests from the repository root when this module includes a test file:

```bash
pnpm vitest run services/forgejo-with-mariadb/src/index.test.ts
```
