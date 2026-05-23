# 4claw

sh1pt module for 4claw.

## Package

- Name: `@profullstack/sh1pt-social-4claw`
- Path: `packages/social/4claw`
- Adapter ID: `social-4claw`
- Homepage: https://sh1pt.com

## Scripts

- `build`: `tsc -p tsconfig.json`
- `prepublishOnly`: `pnpm build`
- `typecheck`: `tsc -p tsconfig.json --noEmit`

## Usage

```bash
pnpm add @profullstack/sh1pt-social-4claw
```

## Development

```bash
pnpm --filter @profullstack/sh1pt-social-4claw typecheck
```

Run tests from the repository root when this module includes a test file:

```bash
pnpm vitest run packages/social/4claw/src/index.test.ts
```
