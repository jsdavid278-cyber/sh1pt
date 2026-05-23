# Twenty

Customizable CRM platform.

## Package

- Name: `@profullstack/sh1pt-service-twenty`
- Path: `services/twenty`
- Adapter ID: `service-twenty`
- Category: `crm`
- Homepage: https://sh1pt.com

## Scripts

- `build`: `tsc -p tsconfig.json`
- `prepublishOnly`: `pnpm build`
- `typecheck`: `tsc -p tsconfig.json --noEmit`

## Usage

```bash
pnpm add @profullstack/sh1pt-service-twenty
```

## Development

```bash
pnpm --filter @profullstack/sh1pt-service-twenty typecheck
```

Run tests from the repository root when this module includes a test file:

```bash
pnpm vitest run services/twenty/src/index.test.ts
```
