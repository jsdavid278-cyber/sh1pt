# Opnform

Open-source form builder.

## Package

- Name: `@profullstack/sh1pt-service-opnform`
- Path: `services/opnform`
- Adapter ID: `service-opnform`
- Category: `forms`
- Homepage: https://sh1pt.com

## Scripts

- `build`: `tsc -p tsconfig.json`
- `prepublishOnly`: `pnpm build`
- `typecheck`: `tsc -p tsconfig.json --noEmit`

## Usage

```bash
pnpm add @profullstack/sh1pt-service-opnform
```

## Development

```bash
pnpm --filter @profullstack/sh1pt-service-opnform typecheck
```

Run tests from the repository root when this module includes a test file:

```bash
pnpm vitest run services/opnform/src/index.test.ts
```
