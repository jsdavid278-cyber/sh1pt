# Wordpress With Mysql

CMS with MySQL.

## Package

- Name: `@profullstack/sh1pt-service-wordpress-with-mysql`
- Path: `services/wordpress-with-mysql`
- Adapter ID: `service-wordpress-with-mysql`
- Category: `cms`
- Homepage: https://sh1pt.com

## Scripts

- `build`: `tsc -p tsconfig.json`
- `prepublishOnly`: `pnpm build`
- `typecheck`: `tsc -p tsconfig.json --noEmit`

## Usage

```bash
pnpm add @profullstack/sh1pt-service-wordpress-with-mysql
```

## Development

```bash
pnpm --filter @profullstack/sh1pt-service-wordpress-with-mysql typecheck
```

Run tests from the repository root when this module includes a test file:

```bash
pnpm vitest run services/wordpress-with-mysql/src/index.test.ts
```
