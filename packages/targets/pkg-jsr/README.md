# JSR (jsr.io - TS-native registry)

sh1pt module for JSR (jsr.io - TS-native registry).

## Package

- Name: `@profullstack/sh1pt-target-pkg-jsr`
- Path: `packages/targets/pkg-jsr`
- Adapter ID: `pkg-jsr`
- Homepage: https://sh1pt.com

## Scripts

- `build`: `tsc -p tsconfig.json`
- `prepublishOnly`: `pnpm build`
- `typecheck`: `tsc -p tsconfig.json --noEmit`

## Usage

```bash
pnpm add @profullstack/sh1pt-target-pkg-jsr
```

## Development

```bash
pnpm --filter @profullstack/sh1pt-target-pkg-jsr typecheck
```

Run tests from the repository root when this module includes a test file:

```bash
pnpm vitest run packages/targets/pkg-jsr/src/index.test.ts
```
