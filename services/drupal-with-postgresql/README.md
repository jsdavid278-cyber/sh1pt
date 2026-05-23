# Drupal With Postgresql

Content management system.

## Package

- Name: `@profullstack/sh1pt-service-drupal-with-postgresql`
- Path: `services/drupal-with-postgresql`
- Adapter ID: `service-drupal-with-postgresql`
- Category: `cms`
- Homepage: https://sh1pt.com

## Scripts

- `build`: `tsc -p tsconfig.json`
- `prepublishOnly`: `pnpm build`
- `typecheck`: `tsc -p tsconfig.json --noEmit`

## Usage

```bash
pnpm add @profullstack/sh1pt-service-drupal-with-postgresql
```

## Development

```bash
pnpm --filter @profullstack/sh1pt-service-drupal-with-postgresql typecheck
```

Run tests from the repository root when this module includes a test file:

```bash
pnpm vitest run services/drupal-with-postgresql/src/index.test.ts
```
