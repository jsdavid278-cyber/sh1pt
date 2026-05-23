# Infisical

Secret management platform.

## Package

- Name: `@profullstack/sh1pt-service-infisical`
- Path: `services/infisical`
- Adapter ID: `service-infisical`
- Category: `security`
- Homepage: https://sh1pt.com

## Scripts

- `build`: `tsc -p tsconfig.json`
- `prepublishOnly`: `pnpm build`
- `typecheck`: `tsc -p tsconfig.json --noEmit`

## Usage

```bash
pnpm add @profullstack/sh1pt-service-infisical
```

## Development

```bash
pnpm --filter @profullstack/sh1pt-service-infisical typecheck
```

Run tests from the repository root when this module includes a test file:

```bash
pnpm vitest run services/infisical/src/index.test.ts
```
