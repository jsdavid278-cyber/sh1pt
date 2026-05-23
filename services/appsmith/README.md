# Appsmith

Low-code platform for internal tools.

## Package

- Name: `@profullstack/sh1pt-service-appsmith`
- Path: `services/appsmith`
- Adapter ID: `service-appsmith`
- Category: `dev`
- Homepage: https://sh1pt.com

## Scripts

- `build`: `tsc -p tsconfig.json`
- `prepublishOnly`: `pnpm build`
- `typecheck`: `tsc -p tsconfig.json --noEmit`

## Usage

```bash
pnpm add @profullstack/sh1pt-service-appsmith
```

## Development

```bash
pnpm --filter @profullstack/sh1pt-service-appsmith typecheck
```

Run tests from the repository root when this module includes a test file:

```bash
pnpm vitest run services/appsmith/src/index.test.ts
```
