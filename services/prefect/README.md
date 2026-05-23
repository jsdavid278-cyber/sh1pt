# Prefect

Workflow orchestration platform.

## Package

- Name: `@profullstack/sh1pt-service-prefect`
- Path: `services/prefect`
- Adapter ID: `service-prefect`
- Category: `automation`
- Homepage: https://sh1pt.com

## Scripts

- `build`: `tsc -p tsconfig.json`
- `prepublishOnly`: `pnpm build`
- `typecheck`: `tsc -p tsconfig.json --noEmit`

## Usage

```bash
pnpm add @profullstack/sh1pt-service-prefect
```

## Development

```bash
pnpm --filter @profullstack/sh1pt-service-prefect typecheck
```

Run tests from the repository root when this module includes a test file:

```bash
pnpm vitest run services/prefect/src/index.test.ts
```
