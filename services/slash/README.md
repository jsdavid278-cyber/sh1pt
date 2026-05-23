# Slash

Open-source links shortener.

## Package

- Name: `@profullstack/sh1pt-service-slash`
- Path: `services/slash`
- Adapter ID: `service-slash`
- Category: `urlshortener`
- Homepage: https://sh1pt.com

## Scripts

- `build`: `tsc -p tsconfig.json`
- `prepublishOnly`: `pnpm build`
- `typecheck`: `tsc -p tsconfig.json --noEmit`

## Usage

```bash
pnpm add @profullstack/sh1pt-service-slash
```

## Development

```bash
pnpm --filter @profullstack/sh1pt-service-slash typecheck
```

Run tests from the repository root when this module includes a test file:

```bash
pnpm vitest run services/slash/src/index.test.ts
```
