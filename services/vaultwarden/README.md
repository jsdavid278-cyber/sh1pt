# Vaultwarden

Self-hosted password manager.

## Package

- Name: `@profullstack/sh1pt-service-vaultwarden`
- Path: `services/vaultwarden`
- Adapter ID: `service-vaultwarden`
- Category: `security`
- Homepage: https://sh1pt.com

## Scripts

- `build`: `tsc -p tsconfig.json`
- `prepublishOnly`: `pnpm build`
- `typecheck`: `tsc -p tsconfig.json --noEmit`

## Usage

```bash
pnpm add @profullstack/sh1pt-service-vaultwarden
```

## Development

```bash
pnpm --filter @profullstack/sh1pt-service-vaultwarden typecheck
```

Run tests from the repository root when this module includes a test file:

```bash
pnpm vitest run services/vaultwarden/src/index.test.ts
```
