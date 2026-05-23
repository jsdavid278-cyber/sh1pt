# Cockpit

Headless content platform.

## Package

- Name: `@profullstack/sh1pt-service-cockpit`
- Path: `services/cockpit`
- Adapter ID: `service-cockpit`
- Category: `cms`
- Homepage: https://sh1pt.com

## Scripts

- `build`: `tsc -p tsconfig.json`
- `prepublishOnly`: `pnpm build`
- `typecheck`: `tsc -p tsconfig.json --noEmit`

## Usage

```bash
pnpm add @profullstack/sh1pt-service-cockpit
```

## Development

```bash
pnpm --filter @profullstack/sh1pt-service-cockpit typecheck
```

Run tests from the repository root when this module includes a test file:

```bash
pnpm vitest run services/cockpit/src/index.test.ts
```
