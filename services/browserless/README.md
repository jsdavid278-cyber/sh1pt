# Browserless

Headless Chrome browser service.

## Package

- Name: `@profullstack/sh1pt-service-browserless`
- Path: `services/browserless`
- Adapter ID: `service-browserless`
- Category: `automation`
- Homepage: https://sh1pt.com

## Scripts

- `build`: `tsc -p tsconfig.json`
- `prepublishOnly`: `pnpm build`
- `typecheck`: `tsc -p tsconfig.json --noEmit`

## Usage

```bash
pnpm add @profullstack/sh1pt-service-browserless
```

## Development

```bash
pnpm --filter @profullstack/sh1pt-service-browserless typecheck
```

Run tests from the repository root when this module includes a test file:

```bash
pnpm vitest run services/browserless/src/index.test.ts
```
