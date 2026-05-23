# Snyk

sh1pt module for Snyk.

## Package

- Name: `@profullstack/sh1pt-security-snyk`
- Path: `packages/security/snyk`
- Adapter ID: `security-snyk`
- Homepage: https://sh1pt.com

## Scripts

- `build`: `tsc -p tsconfig.json`
- `prepublishOnly`: `pnpm build`
- `typecheck`: `tsc -p tsconfig.json --noEmit`

## Usage

```bash
pnpm add @profullstack/sh1pt-security-snyk
```

## Development

```bash
pnpm --filter @profullstack/sh1pt-security-snyk typecheck
```

Run tests from the repository root when this module includes a test file:

```bash
pnpm vitest run packages/security/snyk/src/index.test.ts
```
