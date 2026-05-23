# Sonarr

TV show management and automation.

## Package

- Name: `@profullstack/sh1pt-service-sonarr`
- Path: `services/sonarr`
- Adapter ID: `service-sonarr`
- Category: `media`
- Homepage: https://sh1pt.com

## Scripts

- `build`: `tsc -p tsconfig.json`
- `prepublishOnly`: `pnpm build`
- `typecheck`: `tsc -p tsconfig.json --noEmit`

## Usage

```bash
pnpm add @profullstack/sh1pt-service-sonarr
```

## Development

```bash
pnpm --filter @profullstack/sh1pt-service-sonarr typecheck
```

Run tests from the repository root when this module includes a test file:

```bash
pnpm vitest run services/sonarr/src/index.test.ts
```
