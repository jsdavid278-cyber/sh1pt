# Rocketchat

Self-hosted communication platform.

## Package

- Name: `@profullstack/sh1pt-service-rocketchat`
- Path: `services/rocketchat`
- Adapter ID: `service-rocketchat`
- Category: `chat`
- Homepage: https://sh1pt.com

## Scripts

- `build`: `tsc -p tsconfig.json`
- `prepublishOnly`: `pnpm build`
- `typecheck`: `tsc -p tsconfig.json --noEmit`

## Usage

```bash
pnpm add @profullstack/sh1pt-service-rocketchat
```

## Development

```bash
pnpm --filter @profullstack/sh1pt-service-rocketchat typecheck
```

Run tests from the repository root when this module includes a test file:

```bash
pnpm vitest run services/rocketchat/src/index.test.ts
```
