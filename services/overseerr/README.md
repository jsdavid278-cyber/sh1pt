# Overseerr

Media request management tool.

## Package

- Name: `@profullstack/sh1pt-service-overseerr`
- Path: `services/overseerr`
- Adapter ID: `service-overseerr`
- Category: `media`
- Homepage: https://sh1pt.com

## Scripts

- `build`: `tsc -p tsconfig.json`
- `prepublishOnly`: `pnpm build`
- `typecheck`: `tsc -p tsconfig.json --noEmit`

## Usage

```bash
pnpm add @profullstack/sh1pt-service-overseerr
```

## Development

```bash
pnpm --filter @profullstack/sh1pt-service-overseerr typecheck
```

Run tests from the repository root when this module includes a test file:

```bash
pnpm vitest run services/overseerr/src/index.test.ts
```
