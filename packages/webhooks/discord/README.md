# Discord (channel webhook)

Discord channel-webhook target for sh1pt.

## Package

- Name: `@profullstack/sh1pt-webhooks-discord`
- Path: `packages/webhooks/discord`
- Adapter ID: `webhook-discord`
- Homepage: https://sh1pt.com

## Scripts

- `build`: `tsc -p tsconfig.json`
- `prepublishOnly`: `pnpm build`
- `typecheck`: `tsc -p tsconfig.json --noEmit`

## Usage

```bash
pnpm add @profullstack/sh1pt-webhooks-discord
```

## Development

```bash
pnpm --filter @profullstack/sh1pt-webhooks-discord typecheck
```

Run tests from the repository root when this module includes a test file:

```bash
pnpm vitest run packages/webhooks/discord/src/index.test.ts
```
