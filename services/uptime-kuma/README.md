# Uptime Kuma

Monitoring and status tracking.

## Package

- Name: `@profullstack/sh1pt-service-uptime-kuma`
- Path: `services/uptime-kuma`
- Adapter ID: `service-uptime-kuma`
- Category: `monitoring`
- Homepage: https://sh1pt.com

## Scripts

- `build`: `tsc -p tsconfig.json`
- `prepublishOnly`: `pnpm build`
- `typecheck`: `tsc -p tsconfig.json --noEmit`

## Usage

```bash
pnpm add @profullstack/sh1pt-service-uptime-kuma
```

## Development

```bash
pnpm --filter @profullstack/sh1pt-service-uptime-kuma typecheck
```

Run tests from the repository root when this module includes a test file:

```bash
pnpm vitest run services/uptime-kuma/src/index.test.ts
```
