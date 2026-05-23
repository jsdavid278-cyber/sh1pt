# Microsoft Teams (incoming webhook)

sh1pt module for Microsoft Teams (incoming webhook).

## Package

- Name: `@profullstack/sh1pt-webhooks-teams`
- Path: `packages/webhooks/teams`
- Adapter ID: `webhook-teams`
- Homepage: https://sh1pt.com

## Scripts

- `build`: `tsc -p tsconfig.json`
- `prepublishOnly`: `pnpm build`
- `typecheck`: `tsc -p tsconfig.json --noEmit`

## Usage

```bash
pnpm add @profullstack/sh1pt-webhooks-teams
```

## Development

```bash
pnpm --filter @profullstack/sh1pt-webhooks-teams typecheck
```

Run tests from the repository root when this module includes a test file:

```bash
pnpm vitest run packages/webhooks/teams/src/index.test.ts
```
