# Resend (cold email)

sh1pt module for Resend (cold email).

## Package

- Name: `@profullstack/sh1pt-outreach-resend`
- Path: `packages/outreach/resend`
- Adapter ID: `outreach-resend`
- Homepage: https://sh1pt.com

## Scripts

- `build`: `tsc -p tsconfig.json`
- `prepublishOnly`: `pnpm build`
- `typecheck`: `tsc -p tsconfig.json --noEmit`

## Usage

```bash
pnpm add @profullstack/sh1pt-outreach-resend
```

## Development

```bash
pnpm --filter @profullstack/sh1pt-outreach-resend typecheck
```

Run tests from the repository root when this module includes a test file:

```bash
pnpm vitest run packages/outreach/resend/src/index.test.ts
```
