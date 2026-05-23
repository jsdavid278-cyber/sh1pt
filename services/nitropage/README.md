# Nitropage

Visual website builder.

## Package

- Name: `@profullstack/sh1pt-service-nitropage`
- Path: `services/nitropage`
- Adapter ID: `service-nitropage`
- Category: `cms`
- Homepage: https://sh1pt.com

## Scripts

- `build`: `tsc -p tsconfig.json`
- `prepublishOnly`: `pnpm build`
- `typecheck`: `tsc -p tsconfig.json --noEmit`

## Usage

```bash
pnpm add @profullstack/sh1pt-service-nitropage
```

## Development

```bash
pnpm --filter @profullstack/sh1pt-service-nitropage typecheck
```

Run tests from the repository root when this module includes a test file:

```bash
pnpm vitest run services/nitropage/src/index.test.ts
```
