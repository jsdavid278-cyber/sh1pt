# N8n With Postgresql

Workflow automation with PostgreSQL.

## Package

- Name: `@profullstack/sh1pt-service-n8n-with-postgresql`
- Path: `services/n8n-with-postgresql`
- Adapter ID: `service-n8n-with-postgresql`
- Category: `automation`
- Homepage: https://sh1pt.com

## Scripts

- `build`: `tsc -p tsconfig.json`
- `prepublishOnly`: `pnpm build`
- `typecheck`: `tsc -p tsconfig.json --noEmit`

## Usage

```bash
pnpm add @profullstack/sh1pt-service-n8n-with-postgresql
```

## Development

```bash
pnpm --filter @profullstack/sh1pt-service-n8n-with-postgresql typecheck
```

Run tests from the repository root when this module includes a test file:

```bash
pnpm vitest run services/n8n-with-postgresql/src/index.test.ts
```
