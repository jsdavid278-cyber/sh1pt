# Portainer

Docker management UI.

## Package

- Name: `@profullstack/sh1pt-service-portainer`
- Path: `services/portainer`
- Adapter ID: `service-portainer`
- Category: `infra`
- Homepage: https://sh1pt.com

## Scripts

- `build`: `tsc -p tsconfig.json`
- `prepublishOnly`: `pnpm build`
- `typecheck`: `tsc -p tsconfig.json --noEmit`

## Usage

```bash
pnpm add @profullstack/sh1pt-service-portainer
```

## Development

```bash
pnpm --filter @profullstack/sh1pt-service-portainer typecheck
```

Run tests from the repository root when this module includes a test file:

```bash
pnpm vitest run services/portainer/src/index.test.ts
```
