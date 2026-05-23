# Classicpress With Mariadb

WordPress alternative without Gutenberg.

## Package

- Name: `@profullstack/sh1pt-service-classicpress-with-mariadb`
- Path: `services/classicpress-with-mariadb`
- Adapter ID: `service-classicpress-with-mariadb`
- Category: `cms`
- Homepage: https://sh1pt.com

## Scripts

- `build`: `tsc -p tsconfig.json`
- `prepublishOnly`: `pnpm build`
- `typecheck`: `tsc -p tsconfig.json --noEmit`

## Usage

```bash
pnpm add @profullstack/sh1pt-service-classicpress-with-mariadb
```

## Development

```bash
pnpm --filter @profullstack/sh1pt-service-classicpress-with-mariadb typecheck
```

Run tests from the repository root when this module includes a test file:

```bash
pnpm vitest run services/classicpress-with-mariadb/src/index.test.ts
```
