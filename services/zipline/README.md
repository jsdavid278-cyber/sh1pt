# Zipline

ShareX file upload server.

## Package

- Name: `@profullstack/sh1pt-service-zipline`
- Path: `services/zipline`
- Adapter ID: `service-zipline`
- Category: `files`
- Homepage: https://sh1pt.com

## Scripts

- `build`: `tsc -p tsconfig.json`
- `prepublishOnly`: `pnpm build`
- `typecheck`: `tsc -p tsconfig.json --noEmit`

## Usage

```bash
pnpm add @profullstack/sh1pt-service-zipline
```

## Development

```bash
pnpm --filter @profullstack/sh1pt-service-zipline typecheck
```

Run tests from the repository root when this module includes a test file:

```bash
pnpm vitest run services/zipline/src/index.test.ts
```
