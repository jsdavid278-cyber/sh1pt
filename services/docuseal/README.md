# Docuseal

Document signing alternative to DocuSign.

## Package

- Name: `@profullstack/sh1pt-service-docuseal`
- Path: `services/docuseal`
- Adapter ID: `service-docuseal`
- Category: `docs`
- Homepage: https://sh1pt.com

## Scripts

- `build`: `tsc -p tsconfig.json`
- `prepublishOnly`: `pnpm build`
- `typecheck`: `tsc -p tsconfig.json --noEmit`

## Usage

```bash
pnpm add @profullstack/sh1pt-service-docuseal
```

## Development

```bash
pnpm --filter @profullstack/sh1pt-service-docuseal typecheck
```

Run tests from the repository root when this module includes a test file:

```bash
pnpm vitest run services/docuseal/src/index.test.ts
```
