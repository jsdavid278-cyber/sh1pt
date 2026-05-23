# Freshrss With Mysql

Feed aggregator with MySQL.

## Package

- Name: `@profullstack/sh1pt-service-freshrss-with-mysql`
- Path: `services/freshrss-with-mysql`
- Adapter ID: `service-freshrss-with-mysql`
- Category: `productivity`
- Homepage: https://sh1pt.com

## Scripts

- `build`: `tsc -p tsconfig.json`
- `prepublishOnly`: `pnpm build`
- `typecheck`: `tsc -p tsconfig.json --noEmit`

## Usage

```bash
pnpm add @profullstack/sh1pt-service-freshrss-with-mysql
```

## Development

```bash
pnpm --filter @profullstack/sh1pt-service-freshrss-with-mysql typecheck
```

Run tests from the repository root when this module includes a test file:

```bash
pnpm vitest run services/freshrss-with-mysql/src/index.test.ts
```
