# uGig (Prompts Marketplace)

sh1pt module for uGig (Prompts Marketplace).

## Package

- Name: `@profullstack/sh1pt-social-ugig`
- Path: `packages/social/ugig`
- Adapter ID: `social-ugig`
- Homepage: https://sh1pt.com

## Scripts

- `build`: `tsc -p tsconfig.json`
- `prepublishOnly`: `pnpm build`
- `typecheck`: `tsc -p tsconfig.json --noEmit`

## Usage

```bash
pnpm add @profullstack/sh1pt-social-ugig
```

## Development

```bash
pnpm --filter @profullstack/sh1pt-social-ugig typecheck
```

Run tests from the repository root when this module includes a test file:

```bash
pnpm vitest run packages/social/ugig/src/index.test.ts
```
