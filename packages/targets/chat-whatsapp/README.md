# WhatsApp Business Cloud API

sh1pt module for WhatsApp Business Cloud API.

## Package

- Name: `@profullstack/sh1pt-target-chat-whatsapp`
- Path: `packages/targets/chat-whatsapp`
- Adapter ID: `chat-whatsapp`
- Category: `MARKETING`
- Homepage: https://sh1pt.com

## Scripts

- `build`: `tsc -p tsconfig.json`
- `prepublishOnly`: `pnpm build`
- `typecheck`: `tsc -p tsconfig.json --noEmit`

## Usage

```bash
pnpm add @profullstack/sh1pt-target-chat-whatsapp
```

## Development

```bash
pnpm --filter @profullstack/sh1pt-target-chat-whatsapp typecheck
```

Run tests from the repository root when this module includes a test file:

```bash
pnpm vitest run packages/targets/chat-whatsapp/src/index.test.ts
```
