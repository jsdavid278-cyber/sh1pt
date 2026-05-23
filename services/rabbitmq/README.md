# Rabbitmq

Open-source message broker.

## Package

- Name: `@profullstack/sh1pt-service-rabbitmq`
- Path: `services/rabbitmq`
- Adapter ID: `service-rabbitmq`
- Category: `messaging`
- Homepage: https://sh1pt.com

## Scripts

- `build`: `tsc -p tsconfig.json`
- `prepublishOnly`: `pnpm build`
- `typecheck`: `tsc -p tsconfig.json --noEmit`

## Usage

```bash
pnpm add @profullstack/sh1pt-service-rabbitmq
```

## Development

```bash
pnpm --filter @profullstack/sh1pt-service-rabbitmq typecheck
```

Run tests from the repository root when this module includes a test file:

```bash
pnpm vitest run services/rabbitmq/src/index.test.ts
```
