# Glitchtip

Error tracking system.

## Package

- Name: `@profullstack/sh1pt-service-glitchtip`
- Path: `services/glitchtip`
- Adapter ID: `service-glitchtip`
- Category: `observability`
- Homepage: https://sh1pt.com

## Scripts

- `build`: `tsc -p tsconfig.json`
- `prepublishOnly`: `pnpm build`
- `typecheck`: `tsc -p tsconfig.json --noEmit`

## Usage

```bash
pnpm add @profullstack/sh1pt-service-glitchtip
```

## Development

```bash
pnpm --filter @profullstack/sh1pt-service-glitchtip typecheck
```

Run tests from the repository root when this module includes a test file:

```bash
pnpm vitest run services/glitchtip/src/index.test.ts
```
