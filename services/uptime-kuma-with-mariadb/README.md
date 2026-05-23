# Uptime Kuma With Mariadb

Monitoring with MariaDB.

## Package

- Name: `@profullstack/sh1pt-service-uptime-kuma-with-mariadb`
- Path: `services/uptime-kuma-with-mariadb`
- Adapter ID: `service-uptime-kuma-with-mariadb`
- Category: `monitoring`
- Homepage: https://sh1pt.com

## Scripts

- `build`: `tsc -p tsconfig.json`
- `prepublishOnly`: `pnpm build`
- `typecheck`: `tsc -p tsconfig.json --noEmit`

## Usage

```bash
pnpm add @profullstack/sh1pt-service-uptime-kuma-with-mariadb
```

## Development

```bash
pnpm --filter @profullstack/sh1pt-service-uptime-kuma-with-mariadb typecheck
```

Run tests from the repository root when this module includes a test file:

```bash
pnpm vitest run services/uptime-kuma-with-mariadb/src/index.test.ts
```
