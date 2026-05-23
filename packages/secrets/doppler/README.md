# Doppler

sh1pt module for Doppler.

## Package

- Name: `@profullstack/sh1pt-secrets-doppler`
- Path: `packages/secrets/doppler`
- Adapter ID: `secrets-doppler`
- Homepage: https://sh1pt.com

## Scripts

- `build`: `tsc -p tsconfig.json`
- `prepublishOnly`: `pnpm build`
- `typecheck`: `tsc -p tsconfig.json --noEmit`

## Usage

```bash
pnpm add @profullstack/sh1pt-secrets-doppler
```

## Development

```bash
pnpm --filter @profullstack/sh1pt-secrets-doppler typecheck
```

Run tests from the repository root when this module includes a test file:

```bash
pnpm vitest run packages/secrets/doppler/src/index.test.ts
```
