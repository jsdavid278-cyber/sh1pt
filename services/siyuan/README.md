# Siyuan

Privacy-first knowledge management.

## Package

- Name: `@profullstack/sh1pt-service-siyuan`
- Path: `services/siyuan`
- Adapter ID: `service-siyuan`
- Category: `productivity`
- Homepage: https://sh1pt.com

## Scripts

- `build`: `tsc -p tsconfig.json`
- `prepublishOnly`: `pnpm build`
- `typecheck`: `tsc -p tsconfig.json --noEmit`

## Usage

```bash
pnpm add @profullstack/sh1pt-service-siyuan
```

## Development

```bash
pnpm --filter @profullstack/sh1pt-service-siyuan typecheck
```

Run tests from the repository root when this module includes a test file:

```bash
pnpm vitest run services/siyuan/src/index.test.ts
```
