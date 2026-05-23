# dotenvx

sh1pt module for dotenvx.

## Package

- Name: `@profullstack/sh1pt-secrets-dotenvx`
- Path: `packages/secrets/dotenvx`
- Adapter ID: `secrets-dotenvx`
- Homepage: https://sh1pt.com

## Scripts

- `build`: `tsc -p tsconfig.json`
- `prepublishOnly`: `pnpm build`
- `typecheck`: `tsc -p tsconfig.json --noEmit`

## Usage

```bash
pnpm add @profullstack/sh1pt-secrets-dotenvx
```

## Development

```bash
pnpm --filter @profullstack/sh1pt-secrets-dotenvx typecheck
```

Run tests from the repository root when this module includes a test file:

```bash
pnpm vitest run packages/secrets/dotenvx/src/index.test.ts
```
