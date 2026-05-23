# Uptime Kuma With Mysql

Monitoring with MySQL.

## Package

- Name: `@profullstack/sh1pt-service-uptime-kuma-with-mysql`
- Path: `services/uptime-kuma-with-mysql`
- Adapter ID: `service-uptime-kuma-with-mysql`
- Category: `monitoring`
- Homepage: https://sh1pt.com

## Scripts

- `build`: `tsc -p tsconfig.json`
- `prepublishOnly`: `pnpm build`
- `typecheck`: `tsc -p tsconfig.json --noEmit`

## Usage

```bash
pnpm add @profullstack/sh1pt-service-uptime-kuma-with-mysql
```

## Development

```bash
pnpm --filter @profullstack/sh1pt-service-uptime-kuma-with-mysql typecheck
```

Run tests from the repository root when this module includes a test file:

```bash
pnpm vitest run services/uptime-kuma-with-mysql/src/index.test.ts
```
