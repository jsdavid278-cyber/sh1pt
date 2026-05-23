# Discord App Directory

sh1pt module for Discord App Directory.

## Package

- Name: `@profullstack/sh1pt-target-chat-discord`
- Path: `packages/targets/chat-discord`
- Adapter ID: `chat-discord`
- Homepage: https://sh1pt.com

## Scripts

- `build`: `tsc -p tsconfig.json`
- `prepublishOnly`: `pnpm build`
- `typecheck`: `tsc -p tsconfig.json --noEmit`

## Usage

```bash
pnpm add @profullstack/sh1pt-target-chat-discord
```

## Development

```bash
pnpm --filter @profullstack/sh1pt-target-chat-discord typecheck
```

Run tests from the repository root when this module includes a test file:

```bash
pnpm vitest run packages/targets/chat-discord/src/index.test.ts
```
