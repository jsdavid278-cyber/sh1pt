# Pocket Id

OIDC provider with passkeys.

## Package

- Name: `@profullstack/sh1pt-service-pocket-id`
- Path: `services/pocket-id`
- Adapter ID: `service-pocket-id`
- Category: `auth`
- Homepage: https://sh1pt.com

## Scripts

- `build`: `tsc -p tsconfig.json`
- `prepublishOnly`: `pnpm build`
- `typecheck`: `tsc -p tsconfig.json --noEmit`

## Usage

```bash
pnpm add @profullstack/sh1pt-service-pocket-id
```

## Development

```bash
pnpm --filter @profullstack/sh1pt-service-pocket-id typecheck
```

Run tests from the repository root when this module includes a test file:

```bash
pnpm vitest run services/pocket-id/src/index.test.ts
```
