# Cap

Open-source alternative to Loom.

## Package

- Name: `@profullstack/sh1pt-service-cap`
- Path: `services/cap`
- Adapter ID: `service-cap`
- Category: `video`
- Homepage: https://sh1pt.com

## Scripts

- `build`: `tsc -p tsconfig.json`
- `prepublishOnly`: `pnpm build`
- `typecheck`: `tsc -p tsconfig.json --noEmit`

## Usage

```bash
pnpm add @profullstack/sh1pt-service-cap
```

## Development

```bash
pnpm --filter @profullstack/sh1pt-service-cap typecheck
```

Run tests from the repository root when this module includes a test file:

```bash
pnpm vitest run services/cap/src/index.test.ts
```
