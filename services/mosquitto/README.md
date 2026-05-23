# Mosquitto

Lightweight MQTT message broker.

## Package

- Name: `@profullstack/sh1pt-service-mosquitto`
- Path: `services/mosquitto`
- Adapter ID: `service-mosquitto`
- Category: `messaging`
- Homepage: https://sh1pt.com

## Scripts

- `build`: `tsc -p tsconfig.json`
- `prepublishOnly`: `pnpm build`
- `typecheck`: `tsc -p tsconfig.json --noEmit`

## Usage

```bash
pnpm add @profullstack/sh1pt-service-mosquitto
```

## Development

```bash
pnpm --filter @profullstack/sh1pt-service-mosquitto typecheck
```

Run tests from the repository root when this module includes a test file:

```bash
pnpm vitest run services/mosquitto/src/index.test.ts
```
