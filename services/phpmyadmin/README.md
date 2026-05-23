# Phpmyadmin

MySQL database management.

## Package

- Name: `@profullstack/sh1pt-service-phpmyadmin`
- Path: `services/phpmyadmin`
- Adapter ID: `service-phpmyadmin`
- Category: `db`
- Homepage: https://sh1pt.com

## Scripts

- `build`: `tsc -p tsconfig.json`
- `prepublishOnly`: `pnpm build`
- `typecheck`: `tsc -p tsconfig.json --noEmit`

## Usage

```bash
pnpm add @profullstack/sh1pt-service-phpmyadmin
```

## Development

```bash
pnpm --filter @profullstack/sh1pt-service-phpmyadmin typecheck
```

Run tests from the repository root when this module includes a test file:

```bash
pnpm vitest run services/phpmyadmin/src/index.test.ts
```
