# Formbricks

Open-source survey platform.

## Package

- Name: `@profullstack/sh1pt-service-formbricks`
- Path: `services/formbricks`
- Adapter ID: `service-formbricks`
- Category: `forms`
- Homepage: https://sh1pt.com

## Scripts

- `build`: `tsc -p tsconfig.json`
- `prepublishOnly`: `pnpm build`
- `typecheck`: `tsc -p tsconfig.json --noEmit`

## Usage

```bash
pnpm add @profullstack/sh1pt-service-formbricks
```

## Development

```bash
pnpm --filter @profullstack/sh1pt-service-formbricks typecheck
```

Run tests from the repository root when this module includes a test file:

```bash
pnpm vitest run services/formbricks/src/index.test.ts
```
