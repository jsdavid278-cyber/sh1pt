# Microsoft Teams

sh1pt module for Microsoft Teams.

## Package

- Name: `@profullstack/sh1pt-bot-teams`
- Path: `packages/bots/teams`
- Adapter ID: `teams_${Date.now()}`
- Homepage: https://sh1pt.com

## Scripts

- `build`: `tsc -p tsconfig.json`
- `prepublishOnly`: `pnpm build`
- `typecheck`: `tsc -p tsconfig.json --noEmit`

## Usage

```bash
pnpm add @profullstack/sh1pt-bot-teams
```

## Development

```bash
pnpm --filter @profullstack/sh1pt-bot-teams typecheck
```

Run tests from the repository root when this module includes a test file:

```bash
pnpm vitest run packages/bots/teams/src/index.test.ts
```
