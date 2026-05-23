# Usesend

Email service alternative.

## Package

- Name: `@profullstack/sh1pt-service-usesend`
- Path: `services/usesend`
- Adapter ID: `service-usesend`
- Category: `mail`
- Homepage: https://sh1pt.com

## Scripts

- `build`: `tsc -p tsconfig.json`
- `prepublishOnly`: `pnpm build`
- `typecheck`: `tsc -p tsconfig.json --noEmit`

## Usage

```bash
pnpm add @profullstack/sh1pt-service-usesend
```

## Development

```bash
pnpm --filter @profullstack/sh1pt-service-usesend typecheck
```

Run tests from the repository root when this module includes a test file:

```bash
pnpm vitest run services/usesend/src/index.test.ts
```
