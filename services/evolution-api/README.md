# Evolution Api

Messaging integration API.

## Package

- Name: `@profullstack/sh1pt-service-evolution-api`
- Path: `services/evolution-api`
- Adapter ID: `service-evolution-api`
- Category: `chat`
- Homepage: https://sh1pt.com

## Scripts

- `build`: `tsc -p tsconfig.json`
- `prepublishOnly`: `pnpm build`
- `typecheck`: `tsc -p tsconfig.json --noEmit`

## Usage

```bash
pnpm add @profullstack/sh1pt-service-evolution-api
```

## Development

```bash
pnpm --filter @profullstack/sh1pt-service-evolution-api typecheck
```

Run tests from the repository root when this module includes a test file:

```bash
pnpm vitest run services/evolution-api/src/index.test.ts
```
