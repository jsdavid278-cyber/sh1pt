# Slack (incoming webhook)

sh1pt module for Slack (incoming webhook).

## Package

- Name: `@profullstack/sh1pt-webhooks-slack`
- Path: `packages/webhooks/slack`
- Adapter ID: `webhook-slack`
- Homepage: https://sh1pt.com

## Scripts

- `build`: `tsc -p tsconfig.json`
- `prepublishOnly`: `pnpm build`
- `typecheck`: `tsc -p tsconfig.json --noEmit`

## Usage

```bash
pnpm add @profullstack/sh1pt-webhooks-slack
```

## Development

```bash
pnpm --filter @profullstack/sh1pt-webhooks-slack typecheck
```

Run tests from the repository root when this module includes a test file:

```bash
pnpm vitest run packages/webhooks/slack/src/index.test.ts
```
