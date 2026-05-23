# Glance

Self-hosted dashboard for feeds.

## Package

- Name: `@profullstack/sh1pt-service-glance`
- Path: `services/glance`
- Adapter ID: `service-glance`
- Category: `dashboard`
- Homepage: https://sh1pt.com

## Scripts

- `build`: `tsc -p tsconfig.json`
- `prepublishOnly`: `pnpm build`
- `typecheck`: `tsc -p tsconfig.json --noEmit`

## Usage

```bash
pnpm add @profullstack/sh1pt-service-glance
```

## Development

```bash
pnpm --filter @profullstack/sh1pt-service-glance typecheck
```

Run tests from the repository root when this module includes a test file:

```bash
pnpm vitest run services/glance/src/index.test.ts
```
