# Activepieces

Open source no-code business automation.

## Package

- Name: `@profullstack/sh1pt-service-activepieces`
- Path: `services/activepieces`
- Adapter ID: `service-activepieces`
- Category: `automation`
- Homepage: https://sh1pt.com

## Scripts

- `build`: `tsc -p tsconfig.json`
- `prepublishOnly`: `pnpm build`
- `typecheck`: `tsc -p tsconfig.json --noEmit`

## Usage

```bash
pnpm add @profullstack/sh1pt-service-activepieces
```

## Development

```bash
pnpm --filter @profullstack/sh1pt-service-activepieces typecheck
```

Run tests from the repository root when this module includes a test file:

```bash
pnpm vitest run services/activepieces/src/index.test.ts
```
