# Tolgee

Localization management platform.

## Package

- Name: `@profullstack/sh1pt-service-tolgee`
- Path: `services/tolgee`
- Adapter ID: `service-tolgee`
- Category: `localization`
- Homepage: https://sh1pt.com

## Scripts

- `build`: `tsc -p tsconfig.json`
- `prepublishOnly`: `pnpm build`
- `typecheck`: `tsc -p tsconfig.json --noEmit`

## Usage

```bash
pnpm add @profullstack/sh1pt-service-tolgee
```

## Development

```bash
pnpm --filter @profullstack/sh1pt-service-tolgee typecheck
```

Run tests from the repository root when this module includes a test file:

```bash
pnpm vitest run services/tolgee/src/index.test.ts
```
