# Steam / Steam Deck (SteamOS)

sh1pt module for Steam / Steam Deck (SteamOS).

## Package

- Name: `@profullstack/sh1pt-target-console-steam`
- Path: `packages/targets/console-steam`
- Adapter ID: `console-steam`
- Homepage: https://sh1pt.com

## Scripts

- `build`: `tsc -p tsconfig.json`
- `prepublishOnly`: `pnpm build`
- `typecheck`: `tsc -p tsconfig.json --noEmit`

## Usage

```bash
pnpm add @profullstack/sh1pt-target-console-steam
```

## Development

```bash
pnpm --filter @profullstack/sh1pt-target-console-steam typecheck
```

Run tests from the repository root when this module includes a test file:

```bash
pnpm vitest run packages/targets/console-steam/src/index.test.ts
```
