# Pydio Cells

Large file sharing with automation.

## Package

- Name: `@profullstack/sh1pt-service-pydio-cells`
- Path: `services/pydio-cells`
- Adapter ID: `service-pydio-cells`
- Category: `files`
- Homepage: https://sh1pt.com

## Scripts

- `build`: `tsc -p tsconfig.json`
- `prepublishOnly`: `pnpm build`
- `typecheck`: `tsc -p tsconfig.json --noEmit`

## Usage

```bash
pnpm add @profullstack/sh1pt-service-pydio-cells
```

## Development

```bash
pnpm --filter @profullstack/sh1pt-service-pydio-cells typecheck
```

Run tests from the repository root when this module includes a test file:

```bash
pnpm vitest run services/pydio-cells/src/index.test.ts
```
