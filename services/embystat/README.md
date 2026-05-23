# Embystat

Web analytics tool.

## Package

- Name: `@profullstack/sh1pt-service-embystat`
- Path: `services/embystat`
- Adapter ID: `service-embystat`
- Category: `analytics`
- Homepage: https://sh1pt.com

## Scripts

- `build`: `tsc -p tsconfig.json`
- `prepublishOnly`: `pnpm build`
- `typecheck`: `tsc -p tsconfig.json --noEmit`

## Usage

```bash
pnpm add @profullstack/sh1pt-service-embystat
```

## Development

```bash
pnpm --filter @profullstack/sh1pt-service-embystat typecheck
```

Run tests from the repository root when this module includes a test file:

```bash
pnpm vitest run services/embystat/src/index.test.ts
```
