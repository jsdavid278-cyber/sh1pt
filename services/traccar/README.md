# Traccar

GPS tracking system.

## Package

- Name: `@profullstack/sh1pt-service-traccar`
- Path: `services/traccar`
- Adapter ID: `service-traccar`
- Category: `tracking`
- Homepage: https://sh1pt.com

## Scripts

- `build`: `tsc -p tsconfig.json`
- `prepublishOnly`: `pnpm build`
- `typecheck`: `tsc -p tsconfig.json --noEmit`

## Usage

```bash
pnpm add @profullstack/sh1pt-service-traccar
```

## Development

```bash
pnpm --filter @profullstack/sh1pt-service-traccar typecheck
```

Run tests from the repository root when this module includes a test file:

```bash
pnpm vitest run services/traccar/src/index.test.ts
```
