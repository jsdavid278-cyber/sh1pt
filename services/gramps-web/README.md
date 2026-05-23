# Gramps Web

Online genealogy system.

## Package

- Name: `@profullstack/sh1pt-service-gramps-web`
- Path: `services/gramps-web`
- Adapter ID: `service-gramps-web`
- Category: `tracking`
- Homepage: https://sh1pt.com

## Scripts

- `build`: `tsc -p tsconfig.json`
- `prepublishOnly`: `pnpm build`
- `typecheck`: `tsc -p tsconfig.json --noEmit`

## Usage

```bash
pnpm add @profullstack/sh1pt-service-gramps-web
```

## Development

```bash
pnpm --filter @profullstack/sh1pt-service-gramps-web typecheck
```

Run tests from the repository root when this module includes a test file:

```bash
pnpm vitest run services/gramps-web/src/index.test.ts
```
