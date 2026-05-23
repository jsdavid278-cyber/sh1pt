# Discord

sh1pt module for Discord.

## Package

- Name: `@profullstack/sh1pt-social-discord`
- Path: `packages/social/discord`
- Adapter ID: `social-discord`
- Homepage: https://sh1pt.com

## Scripts

- `build`: `tsc -p tsconfig.json`
- `prepublishOnly`: `pnpm build`
- `typecheck`: `tsc -p tsconfig.json --noEmit`

## Usage

```bash
pnpm add @profullstack/sh1pt-social-discord
```

## Development

```bash
pnpm --filter @profullstack/sh1pt-social-discord typecheck
```

Run tests from the repository root when this module includes a test file:

```bash
pnpm vitest run packages/social/discord/src/index.test.ts
```
