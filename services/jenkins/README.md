# Jenkins

Automation server for CI/CD.

## Package

- Name: `@profullstack/sh1pt-service-jenkins`
- Path: `services/jenkins`
- Adapter ID: `service-jenkins`
- Category: `ci`
- Homepage: https://sh1pt.com

## Scripts

- `build`: `tsc -p tsconfig.json`
- `prepublishOnly`: `pnpm build`
- `typecheck`: `tsc -p tsconfig.json --noEmit`

## Usage

```bash
pnpm add @profullstack/sh1pt-service-jenkins
```

## Development

```bash
pnpm --filter @profullstack/sh1pt-service-jenkins typecheck
```

Run tests from the repository root when this module includes a test file:

```bash
pnpm vitest run services/jenkins/src/index.test.ts
```
