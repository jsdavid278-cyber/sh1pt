# Espocrm

Free open-source CRM platform.

## Package

- Name: `@profullstack/sh1pt-service-espocrm`
- Path: `services/espocrm`
- Adapter ID: `service-espocrm`
- Category: `crm`
- Homepage: https://sh1pt.com

## Scripts

- `build`: `tsc -p tsconfig.json`
- `prepublishOnly`: `pnpm build`
- `typecheck`: `tsc -p tsconfig.json --noEmit`

## Usage

```bash
pnpm add @profullstack/sh1pt-service-espocrm
```

## Development

```bash
pnpm --filter @profullstack/sh1pt-service-espocrm typecheck
```

Run tests from the repository root when this module includes a test file:

```bash
pnpm vitest run services/espocrm/src/index.test.ts
```
