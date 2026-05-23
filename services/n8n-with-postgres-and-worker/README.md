# N8n With Postgres And Worker

Automation with queue mode.

## Package

- Name: `@profullstack/sh1pt-service-n8n-with-postgres-and-worker`
- Path: `services/n8n-with-postgres-and-worker`
- Adapter ID: `service-n8n-with-postgres-and-worker`
- Category: `automation`
- Homepage: https://sh1pt.com

## Scripts

- `build`: `tsc -p tsconfig.json`
- `prepublishOnly`: `pnpm build`
- `typecheck`: `tsc -p tsconfig.json --noEmit`

## Usage

```bash
pnpm add @profullstack/sh1pt-service-n8n-with-postgres-and-worker
```

## Development

```bash
pnpm --filter @profullstack/sh1pt-service-n8n-with-postgres-and-worker typecheck
```

Run tests from the repository root when this module includes a test file:

```bash
pnpm vitest run services/n8n-with-postgres-and-worker/src/index.test.ts
```
