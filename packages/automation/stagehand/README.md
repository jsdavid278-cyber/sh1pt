# Stagehand (Browserbase)

sh1pt module for Stagehand (Browserbase).

## Package

- Name: `@profullstack/sh1pt-automation-stagehand`
- Path: `packages/automation/stagehand`
- Adapter ID: `automation-stagehand`
- Homepage: https://sh1pt.com

## Scripts

- `build`: `tsc -p tsconfig.json`
- `prepublishOnly`: `pnpm build`
- `typecheck`: `tsc -p tsconfig.json --noEmit`

## Usage

```bash
pnpm add @profullstack/sh1pt-automation-stagehand
```

## Development

```bash
pnpm --filter @profullstack/sh1pt-automation-stagehand typecheck
```

Run tests from the repository root when this module includes a test file:

```bash
pnpm vitest run packages/automation/stagehand/src/index.test.ts
```
