# Vvveb With Mysql

CMS with MySQL.

## Package

- Name: `@profullstack/sh1pt-service-vvveb-with-mysql`
- Path: `services/vvveb-with-mysql`
- Adapter ID: `service-vvveb-with-mysql`
- Category: `cms`
- Homepage: https://sh1pt.com

## Scripts

- `build`: `tsc -p tsconfig.json`
- `prepublishOnly`: `pnpm build`
- `typecheck`: `tsc -p tsconfig.json --noEmit`

## Usage

```bash
pnpm add @profullstack/sh1pt-service-vvveb-with-mysql
```

## Development

```bash
pnpm --filter @profullstack/sh1pt-service-vvveb-with-mysql typecheck
```

Run tests from the repository root when this module includes a test file:

```bash
pnpm vitest run services/vvveb-with-mysql/src/index.test.ts
```
