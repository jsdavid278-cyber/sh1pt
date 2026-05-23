# 1Password

sh1pt module for 1Password.

## Package

- Name: `@profullstack/sh1pt-secrets-onepassword`
- Path: `packages/secrets/onepassword`
- Adapter ID: `secrets-onepassword`
- Homepage: https://sh1pt.com

## Scripts

- `build`: `tsc -p tsconfig.json`
- `prepublishOnly`: `pnpm build`
- `typecheck`: `tsc -p tsconfig.json --noEmit`

## Usage

```bash
pnpm add @profullstack/sh1pt-secrets-onepassword
```

## Development

```bash
pnpm --filter @profullstack/sh1pt-secrets-onepassword typecheck
```

Run tests from the repository root when this module includes a test file:

```bash
pnpm vitest run packages/secrets/onepassword/src/index.test.ts
```
