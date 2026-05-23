# Changedetection

Website change monitoring.

## Package

- Name: `@profullstack/sh1pt-service-changedetection`
- Path: `services/changedetection`
- Adapter ID: `service-changedetection`
- Category: `monitoring`
- Homepage: https://sh1pt.com

## Scripts

- `build`: `tsc -p tsconfig.json`
- `prepublishOnly`: `pnpm build`
- `typecheck`: `tsc -p tsconfig.json --noEmit`

## Usage

```bash
pnpm add @profullstack/sh1pt-service-changedetection
```

## Development

```bash
pnpm --filter @profullstack/sh1pt-service-changedetection typecheck
```

Run tests from the repository root when this module includes a test file:

```bash
pnpm vitest run services/changedetection/src/index.test.ts
```
