# Forgejo With Mysql

Software forge with MySQL.

## Package

- Name: `@profullstack/sh1pt-service-forgejo-with-mysql`
- Path: `services/forgejo-with-mysql`
- Adapter ID: `service-forgejo-with-mysql`
- Category: `vcs`
- Homepage: https://sh1pt.com

## Scripts

- `build`: `tsc -p tsconfig.json`
- `prepublishOnly`: `pnpm build`
- `typecheck`: `tsc -p tsconfig.json --noEmit`

## Usage

```bash
pnpm add @profullstack/sh1pt-service-forgejo-with-mysql
```

## Development

```bash
pnpm --filter @profullstack/sh1pt-service-forgejo-with-mysql typecheck
```

Run tests from the repository root when this module includes a test file:

```bash
pnpm vitest run services/forgejo-with-mysql/src/index.test.ts
```
