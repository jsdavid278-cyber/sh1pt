# deno.land/x (git-tag registry)

sh1pt module for deno.land/x (git-tag registry).

## Package

- Name: `@profullstack/sh1pt-target-pkg-deno`
- Path: `packages/targets/pkg-deno`
- Adapter ID: `pkg-deno`
- Homepage: https://sh1pt.com

## Scripts

- `build`: `tsc -p tsconfig.json`
- `prepublishOnly`: `pnpm build`
- `typecheck`: `tsc -p tsconfig.json --noEmit`

## Usage

```bash
pnpm add @profullstack/sh1pt-target-pkg-deno
```

## Development

```bash
pnpm --filter @profullstack/sh1pt-target-pkg-deno typecheck
```

Run tests from the repository root when this module includes a test file:

```bash
pnpm vitest run packages/targets/pkg-deno/src/index.test.ts
```
