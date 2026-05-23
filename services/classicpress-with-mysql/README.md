# Classicpress With Mysql

WordPress alternative without Gutenberg.

## Package

- Name: `@profullstack/sh1pt-service-classicpress-with-mysql`
- Path: `services/classicpress-with-mysql`
- Adapter ID: `service-classicpress-with-mysql`
- Category: `cms`
- Homepage: https://sh1pt.com

## Scripts

- `build`: `tsc -p tsconfig.json`
- `prepublishOnly`: `pnpm build`
- `typecheck`: `tsc -p tsconfig.json --noEmit`

## Usage

```bash
pnpm add @profullstack/sh1pt-service-classicpress-with-mysql
```

## Development

```bash
pnpm --filter @profullstack/sh1pt-service-classicpress-with-mysql typecheck
```

Run tests from the repository root when this module includes a test file:

```bash
pnpm vitest run services/classicpress-with-mysql/src/index.test.ts
```
