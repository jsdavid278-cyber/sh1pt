# Easyappointments

Online appointment scheduler.

## Package

- Name: `@profullstack/sh1pt-service-easyappointments`
- Path: `services/easyappointments`
- Adapter ID: `service-easyappointments`
- Category: `scheduling`
- Homepage: https://sh1pt.com

## Scripts

- `build`: `tsc -p tsconfig.json`
- `prepublishOnly`: `pnpm build`
- `typecheck`: `tsc -p tsconfig.json --noEmit`

## Usage

```bash
pnpm add @profullstack/sh1pt-service-easyappointments
```

## Development

```bash
pnpm --filter @profullstack/sh1pt-service-easyappointments typecheck
```

Run tests from the repository root when this module includes a test file:

```bash
pnpm vitest run services/easyappointments/src/index.test.ts
```
