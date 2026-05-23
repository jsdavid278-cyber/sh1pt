# Nextcloud With Mysql

File storage with MySQL.

## Package

- Name: `@profullstack/sh1pt-service-nextcloud-with-mysql`
- Path: `services/nextcloud-with-mysql`
- Adapter ID: `service-nextcloud-with-mysql`
- Category: `files`
- Homepage: https://sh1pt.com

## Scripts

- `build`: `tsc -p tsconfig.json`
- `prepublishOnly`: `pnpm build`
- `typecheck`: `tsc -p tsconfig.json --noEmit`

## Usage

```bash
pnpm add @profullstack/sh1pt-service-nextcloud-with-mysql
```

## Development

```bash
pnpm --filter @profullstack/sh1pt-service-nextcloud-with-mysql typecheck
```

Run tests from the repository root when this module includes a test file:

```bash
pnpm vitest run services/nextcloud-with-mysql/src/index.test.ts
```
