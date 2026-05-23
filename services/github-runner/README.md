# Github Runner

GitHub Actions runner.

## Package

- Name: `@profullstack/sh1pt-service-github-runner`
- Path: `services/github-runner`
- Adapter ID: `service-github-runner`
- Category: `ci`
- Homepage: https://sh1pt.com

## Scripts

- `build`: `tsc -p tsconfig.json`
- `prepublishOnly`: `pnpm build`
- `typecheck`: `tsc -p tsconfig.json --noEmit`

## Usage

```bash
pnpm add @profullstack/sh1pt-service-github-runner
```

## Development

```bash
pnpm --filter @profullstack/sh1pt-service-github-runner typecheck
```

Run tests from the repository root when this module includes a test file:

```bash
pnpm vitest run services/github-runner/src/index.test.ts
```
