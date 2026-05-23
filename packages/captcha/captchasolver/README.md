# CaptchaSolver

sh1pt module for CaptchaSolver.

## Package

- Name: `@profullstack/sh1pt-captcha-solver`
- Path: `packages/captcha/captchasolver`
- Adapter ID: `captcha-solver`
- Homepage: https://sh1pt.com

## Scripts

- `build`: `tsc -p tsconfig.json`
- `prepublishOnly`: `pnpm build`
- `typecheck`: `tsc -p tsconfig.json --noEmit`

## Usage

```bash
pnpm add @profullstack/sh1pt-captcha-solver
```

## Development

```bash
pnpm --filter @profullstack/sh1pt-captcha-solver typecheck
```

Run tests from the repository root when this module includes a test file:

```bash
pnpm vitest run packages/captcha/captchasolver/src/index.test.ts
```
