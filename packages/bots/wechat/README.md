# WeChat

sh1pt module for WeChat.

## Package

- Name: `@profullstack/sh1pt-bot-wechat`
- Path: `packages/bots/wechat`
- Adapter ID: `bot-wechat`
- Homepage: https://sh1pt.com

## Scripts

- `build`: `tsc -p tsconfig.json`
- `prepublishOnly`: `pnpm build`
- `typecheck`: `tsc -p tsconfig.json --noEmit`

## Usage

```bash
pnpm add @profullstack/sh1pt-bot-wechat
```

## Development

```bash
pnpm --filter @profullstack/sh1pt-bot-wechat typecheck
```

Run tests from the repository root when this module includes a test file:

```bash
pnpm vitest run packages/bots/wechat/src/index.test.ts
```
