# Once Campfire

Simple group chat application.

## Package

- Name: `@profullstack/sh1pt-service-once-campfire`
- Path: `services/once-campfire`
- Adapter ID: `service-once-campfire`
- Category: `chat`
- Homepage: https://sh1pt.com

## Scripts

- `build`: `tsc -p tsconfig.json`
- `prepublishOnly`: `pnpm build`
- `typecheck`: `tsc -p tsconfig.json --noEmit`

## Usage

```bash
pnpm add @profullstack/sh1pt-service-once-campfire
```

## Development

```bash
pnpm --filter @profullstack/sh1pt-service-once-campfire typecheck
```

Run tests from the repository root when this module includes a test file:

```bash
pnpm vitest run services/once-campfire/src/index.test.ts
```
