# Fider

User feedback collection platform.

## Package

- Name: `@profullstack/sh1pt-service-fider`
- Path: `services/fider`
- Adapter ID: `service-fider`
- Category: `forms`
- Homepage: https://sh1pt.com

## Scripts

- `build`: `tsc -p tsconfig.json`
- `prepublishOnly`: `pnpm build`
- `typecheck`: `tsc -p tsconfig.json --noEmit`

## Usage

```bash
pnpm add @profullstack/sh1pt-service-fider
```

## Development

```bash
pnpm --filter @profullstack/sh1pt-service-fider typecheck
```

Run tests from the repository root when this module includes a test file:

```bash
pnpm vitest run services/fider/src/index.test.ts
```
