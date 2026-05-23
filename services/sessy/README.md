# Sessy

Email observability platform.

## Package

- Name: `@profullstack/sh1pt-service-sessy`
- Path: `services/sessy`
- Adapter ID: `service-sessy`
- Category: `mail`
- Homepage: https://sh1pt.com

## Scripts

- `build`: `tsc -p tsconfig.json`
- `prepublishOnly`: `pnpm build`
- `typecheck`: `tsc -p tsconfig.json --noEmit`

## Usage

```bash
pnpm add @profullstack/sh1pt-service-sessy
```

## Development

```bash
pnpm --filter @profullstack/sh1pt-service-sessy typecheck
```

Run tests from the repository root when this module includes a test file:

```bash
pnpm vitest run services/sessy/src/index.test.ts
```
