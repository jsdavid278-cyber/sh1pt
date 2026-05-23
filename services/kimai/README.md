# Kimai

Open-source time-tracking application.

## Package

- Name: `@profullstack/sh1pt-service-kimai`
- Path: `services/kimai`
- Adapter ID: `service-kimai`
- Category: `tracking`
- Homepage: https://sh1pt.com

## Scripts

- `build`: `tsc -p tsconfig.json`
- `prepublishOnly`: `pnpm build`
- `typecheck`: `tsc -p tsconfig.json --noEmit`

## Usage

```bash
pnpm add @profullstack/sh1pt-service-kimai
```

## Development

```bash
pnpm --filter @profullstack/sh1pt-service-kimai typecheck
```

Run tests from the repository root when this module includes a test file:

```bash
pnpm vitest run services/kimai/src/index.test.ts
```
