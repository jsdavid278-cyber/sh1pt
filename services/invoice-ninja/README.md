# Invoice Ninja

Open-source invoicing platform.

## Package

- Name: `@profullstack/sh1pt-service-invoice-ninja`
- Path: `services/invoice-ninja`
- Adapter ID: `service-invoice-ninja`
- Category: `finance`
- Homepage: https://sh1pt.com

## Scripts

- `build`: `tsc -p tsconfig.json`
- `prepublishOnly`: `pnpm build`
- `typecheck`: `tsc -p tsconfig.json --noEmit`

## Usage

```bash
pnpm add @profullstack/sh1pt-service-invoice-ninja
```

## Development

```bash
pnpm --filter @profullstack/sh1pt-service-invoice-ninja typecheck
```

Run tests from the repository root when this module includes a test file:

```bash
pnpm vitest run services/invoice-ninja/src/index.test.ts
```
