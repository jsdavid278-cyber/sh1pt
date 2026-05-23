# Hoppscotch

Open-source API development platform.

## Package

- Name: `@profullstack/sh1pt-service-hoppscotch`
- Path: `services/hoppscotch`
- Adapter ID: `service-hoppscotch`
- Category: `dev`
- Homepage: https://sh1pt.com

## Scripts

- `build`: `tsc -p tsconfig.json`
- `prepublishOnly`: `pnpm build`
- `typecheck`: `tsc -p tsconfig.json --noEmit`

## Usage

```bash
pnpm add @profullstack/sh1pt-service-hoppscotch
```

## Development

```bash
pnpm --filter @profullstack/sh1pt-service-hoppscotch typecheck
```

Run tests from the repository root when this module includes a test file:

```bash
pnpm vitest run services/hoppscotch/src/index.test.ts
```
