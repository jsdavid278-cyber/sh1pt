# Grimmory

Personal book collection manager.

## Package

- Name: `@profullstack/sh1pt-service-grimmory`
- Path: `services/grimmory`
- Adapter ID: `service-grimmory`
- Category: `tracking`
- Homepage: https://sh1pt.com

## Scripts

- `build`: `tsc -p tsconfig.json`
- `prepublishOnly`: `pnpm build`
- `typecheck`: `tsc -p tsconfig.json --noEmit`

## Usage

```bash
pnpm add @profullstack/sh1pt-service-grimmory
```

## Development

```bash
pnpm --filter @profullstack/sh1pt-service-grimmory typecheck
```

Run tests from the repository root when this module includes a test file:

```bash
pnpm vitest run services/grimmory/src/index.test.ts
```
