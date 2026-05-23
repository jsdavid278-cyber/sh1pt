# Secureclaw

sh1pt module for Secureclaw.

## Package

- Name: `@profullstack/sh1pt-social-secureclaw`
- Path: `packages/social/secureclaw`
- Adapter ID: `social-secureclaw`
- Homepage: https://sh1pt.com

## Scripts

- `build`: `tsc -p tsconfig.json`
- `prepublishOnly`: `pnpm build`
- `typecheck`: `tsc -p tsconfig.json --noEmit`

## Usage

```bash
pnpm add @profullstack/sh1pt-social-secureclaw
```

## Development

```bash
pnpm --filter @profullstack/sh1pt-social-secureclaw typecheck
```

Run tests from the repository root when this module includes a test file:

```bash
pnpm vitest run packages/social/secureclaw/src/index.test.ts
```
