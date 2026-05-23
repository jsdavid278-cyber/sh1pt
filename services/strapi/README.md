# Strapi

Headless CMS with powerful API.

## Package

- Name: `@profullstack/sh1pt-service-strapi`
- Path: `services/strapi`
- Adapter ID: `service-strapi`
- Category: `cms`
- Homepage: https://sh1pt.com

## Scripts

- `build`: `tsc -p tsconfig.json`
- `prepublishOnly`: `pnpm build`
- `typecheck`: `tsc -p tsconfig.json --noEmit`

## Usage

```bash
pnpm add @profullstack/sh1pt-service-strapi
```

## Development

```bash
pnpm --filter @profullstack/sh1pt-service-strapi typecheck
```

Run tests from the repository root when this module includes a test file:

```bash
pnpm vitest run services/strapi/src/index.test.ts
```
