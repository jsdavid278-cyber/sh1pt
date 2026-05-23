# Mixpost

Social media management software.

## Package

- Name: `@profullstack/sh1pt-service-mixpost`
- Path: `services/mixpost`
- Adapter ID: `service-mixpost`
- Category: `social`
- Homepage: https://sh1pt.com

## Scripts

- `build`: `tsc -p tsconfig.json`
- `prepublishOnly`: `pnpm build`
- `typecheck`: `tsc -p tsconfig.json --noEmit`

## Usage

```bash
pnpm add @profullstack/sh1pt-service-mixpost
```

## Development

```bash
pnpm --filter @profullstack/sh1pt-service-mixpost typecheck
```

Run tests from the repository root when this module includes a test file:

```bash
pnpm vitest run services/mixpost/src/index.test.ts
```
