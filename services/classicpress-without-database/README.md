# Classicpress Without Database

WordPress alternative without Gutenberg.

## Package

- Name: `@profullstack/sh1pt-service-classicpress-without-database`
- Path: `services/classicpress-without-database`
- Adapter ID: `service-classicpress-without-database`
- Category: `cms`
- Homepage: https://sh1pt.com

## Scripts

- `build`: `tsc -p tsconfig.json`
- `prepublishOnly`: `pnpm build`
- `typecheck`: `tsc -p tsconfig.json --noEmit`

## Usage

```bash
pnpm add @profullstack/sh1pt-service-classicpress-without-database
```

## Development

```bash
pnpm --filter @profullstack/sh1pt-service-classicpress-without-database typecheck
```

Run tests from the repository root when this module includes a test file:

```bash
pnpm vitest run services/classicpress-without-database/src/index.test.ts
```
