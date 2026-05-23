# Lobe Chat

Open-source AI chat framework.

## Package

- Name: `@profullstack/sh1pt-service-lobe-chat`
- Path: `services/lobe-chat`
- Adapter ID: `service-lobe-chat`
- Category: `chat`
- Homepage: https://sh1pt.com

## Scripts

- `build`: `tsc -p tsconfig.json`
- `prepublishOnly`: `pnpm build`
- `typecheck`: `tsc -p tsconfig.json --noEmit`

## Usage

```bash
pnpm add @profullstack/sh1pt-service-lobe-chat
```

## Development

```bash
pnpm --filter @profullstack/sh1pt-service-lobe-chat typecheck
```

Run tests from the repository root when this module includes a test file:

```bash
pnpm vitest run services/lobe-chat/src/index.test.ts
```
