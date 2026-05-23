# Unleash Without Database

Feature flag management.

## Package

- Name: `@profullstack/sh1pt-service-unleash-without-database`
- Path: `services/unleash-without-database`
- Adapter ID: `service-unleash-without-database`
- Category: `dev`
- Homepage: https://sh1pt.com

## Scripts

- `build`: `tsc -p tsconfig.json`
- `prepublishOnly`: `pnpm build`
- `typecheck`: `tsc -p tsconfig.json --noEmit`

## Usage

```bash
pnpm add @profullstack/sh1pt-service-unleash-without-database
```

## Development

```bash
pnpm --filter @profullstack/sh1pt-service-unleash-without-database typecheck
```

Run tests from the repository root when this module includes a test file:

```bash
pnpm vitest run services/unleash-without-database/src/index.test.ts
```
