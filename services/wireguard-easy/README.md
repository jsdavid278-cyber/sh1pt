# Wireguard Easy

WireGuard VPN with web admin.

## Package

- Name: `@profullstack/sh1pt-service-wireguard-easy`
- Path: `services/wireguard-easy`
- Adapter ID: `service-wireguard-easy`
- Category: `network`
- Homepage: https://sh1pt.com

## Scripts

- `build`: `tsc -p tsconfig.json`
- `prepublishOnly`: `pnpm build`
- `typecheck`: `tsc -p tsconfig.json --noEmit`

## Usage

```bash
pnpm add @profullstack/sh1pt-service-wireguard-easy
```

## Development

```bash
pnpm --filter @profullstack/sh1pt-service-wireguard-easy typecheck
```

Run tests from the repository root when this module includes a test file:

```bash
pnpm vitest run services/wireguard-easy/src/index.test.ts
```
