# Grocy

Household management application.

## Package

- Name: `@profullstack/sh1pt-service-grocy`
- Path: `services/grocy`
- Adapter ID: `service-grocy`
- Category: `productivity`
- Homepage: https://sh1pt.com

## Scripts

- `build`: `tsc -p tsconfig.json`
- `prepublishOnly`: `pnpm build`
- `typecheck`: `tsc -p tsconfig.json --noEmit`

## Usage

```bash
pnpm add @profullstack/sh1pt-service-grocy
```

## Development

```bash
pnpm --filter @profullstack/sh1pt-service-grocy typecheck
```

Run tests from the repository root when this module includes a test file:

```bash
pnpm vitest run services/grocy/src/index.test.ts
```
