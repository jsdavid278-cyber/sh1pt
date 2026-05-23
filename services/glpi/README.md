# Glpi

IT service management platform.

## Package

- Name: `@profullstack/sh1pt-service-glpi`
- Path: `services/glpi`
- Adapter ID: `service-glpi`
- Category: `helpdesk`
- Homepage: https://sh1pt.com

## Scripts

- `build`: `tsc -p tsconfig.json`
- `prepublishOnly`: `pnpm build`
- `typecheck`: `tsc -p tsconfig.json --noEmit`

## Usage

```bash
pnpm add @profullstack/sh1pt-service-glpi
```

## Development

```bash
pnpm --filter @profullstack/sh1pt-service-glpi typecheck
```

Run tests from the repository root when this module includes a test file:

```bash
pnpm vitest run services/glpi/src/index.test.ts
```
