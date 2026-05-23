# Wordpress Without Database

CMS variant.

## Package

- Name: `@profullstack/sh1pt-service-wordpress-without-database`
- Path: `services/wordpress-without-database`
- Adapter ID: `service-wordpress-without-database`
- Category: `cms`
- Homepage: https://sh1pt.com

## Scripts

- `build`: `tsc -p tsconfig.json`
- `prepublishOnly`: `pnpm build`
- `typecheck`: `tsc -p tsconfig.json --noEmit`

## Usage

```bash
pnpm add @profullstack/sh1pt-service-wordpress-without-database
```

## Development

```bash
pnpm --filter @profullstack/sh1pt-service-wordpress-without-database typecheck
```

Run tests from the repository root when this module includes a test file:

```bash
pnpm vitest run services/wordpress-without-database/src/index.test.ts
```
