# Soketi

Open-source WebSockets server.

## Package

- Name: `@profullstack/sh1pt-service-soketi`
- Path: `services/soketi`
- Adapter ID: `service-soketi`
- Category: `messaging`
- Homepage: https://sh1pt.com

## Scripts

- `build`: `tsc -p tsconfig.json`
- `prepublishOnly`: `pnpm build`
- `typecheck`: `tsc -p tsconfig.json --noEmit`

## Usage

```bash
pnpm add @profullstack/sh1pt-service-soketi
```

## Development

```bash
pnpm --filter @profullstack/sh1pt-service-soketi typecheck
```

Run tests from the repository root when this module includes a test file:

```bash
pnpm vitest run services/soketi/src/index.test.ts
```
