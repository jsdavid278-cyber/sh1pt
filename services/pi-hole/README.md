# Pi Hole

Network-wide ad blocking.

## Package

- Name: `@profullstack/sh1pt-service-pi-hole`
- Path: `services/pi-hole`
- Adapter ID: `service-pi-hole`
- Category: `network`
- Homepage: https://sh1pt.com

## Scripts

- `build`: `tsc -p tsconfig.json`
- `prepublishOnly`: `pnpm build`
- `typecheck`: `tsc -p tsconfig.json --noEmit`

## Usage

```bash
pnpm add @profullstack/sh1pt-service-pi-hole
```

## Development

```bash
pnpm --filter @profullstack/sh1pt-service-pi-hole typecheck
```

Run tests from the repository root when this module includes a test file:

```bash
pnpm vitest run services/pi-hole/src/index.test.ts
```
