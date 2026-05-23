# exe.dev (persistent VMs)

sh1pt module for exe.dev (persistent VMs).

## Package

- Name: `@profullstack/sh1pt-cloud-exe-dev`
- Path: `packages/cloud/exe-dev`
- Adapter ID: `cloud-exe-dev`
- Homepage: https://sh1pt.com

## Scripts

- `build`: `tsc -p tsconfig.json`
- `prepublishOnly`: `pnpm build`
- `typecheck`: `tsc -p tsconfig.json --noEmit`

## Usage

```bash
pnpm add @profullstack/sh1pt-cloud-exe-dev
```

## Development

```bash
pnpm --filter @profullstack/sh1pt-cloud-exe-dev typecheck
```

Run tests from the repository root when this module includes a test file:

```bash
pnpm vitest run packages/cloud/exe-dev/src/index.test.ts
```
