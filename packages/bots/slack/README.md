# Slack

sh1pt module for Slack.

## Package

- Name: `@profullstack/sh1pt-bot-slack`
- Path: `packages/bots/slack`
- Adapter ID: `bot-slack`
- Homepage: https://sh1pt.com

## Scripts

- `build`: `tsc -p tsconfig.json`
- `prepublishOnly`: `pnpm build`
- `typecheck`: `tsc -p tsconfig.json --noEmit`

## Usage

```bash
pnpm add @profullstack/sh1pt-bot-slack
```

## Development

```bash
pnpm --filter @profullstack/sh1pt-bot-slack typecheck
```

Run tests from the repository root when this module includes a test file:

```bash
pnpm vitest run packages/bots/slack/src/index.test.ts
```
