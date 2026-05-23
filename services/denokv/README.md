# DenoKV

Key-value database by Denoland.

## Package

- Name: `@profullstack/sh1pt-service-denokv`
- Path: `services/denokv`
- Adapter ID: `service-denokv`
- Category: `db`
- Homepage: https://sh1pt.com

## Scripts

- `build`: `tsc -p tsconfig.json`
- `prepublishOnly`: `pnpm build`
- `typecheck`: `tsc -p tsconfig.json --noEmit`

## Usage

```bash
pnpm add @profullstack/sh1pt-service-denokv
```

## Development

```bash
pnpm --filter @profullstack/sh1pt-service-denokv typecheck
```

Run tests from the repository root when this module includes a test file:

```bash
pnpm vitest run services/denokv/src/index.test.ts
```
