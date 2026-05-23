# Heyform

Conversational form builder.

## Package

- Name: `@profullstack/sh1pt-service-heyform`
- Path: `services/heyform`
- Adapter ID: `service-heyform`
- Category: `forms`
- Homepage: https://sh1pt.com

## Scripts

- `build`: `tsc -p tsconfig.json`
- `prepublishOnly`: `pnpm build`
- `typecheck`: `tsc -p tsconfig.json --noEmit`

## Usage

```bash
pnpm add @profullstack/sh1pt-service-heyform
```

## Development

```bash
pnpm --filter @profullstack/sh1pt-service-heyform typecheck
```

Run tests from the repository root when this module includes a test file:

```bash
pnpm vitest run services/heyform/src/index.test.ts
```
