# Reactive Resume

Privacy-focused resume builder.

## Package

- Name: `@profullstack/sh1pt-service-reactive-resume`
- Path: `services/reactive-resume`
- Adapter ID: `service-reactive-resume`
- Category: `productivity`
- Homepage: https://sh1pt.com

## Scripts

- `build`: `tsc -p tsconfig.json`
- `prepublishOnly`: `pnpm build`
- `typecheck`: `tsc -p tsconfig.json --noEmit`

## Usage

```bash
pnpm add @profullstack/sh1pt-service-reactive-resume
```

## Development

```bash
pnpm --filter @profullstack/sh1pt-service-reactive-resume typecheck
```

Run tests from the repository root when this module includes a test file:

```bash
pnpm vitest run services/reactive-resume/src/index.test.ts
```
