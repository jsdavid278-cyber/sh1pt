# Calibre Web Automated Book Downloader

Book search and request interface.

## Package

- Name: `@profullstack/sh1pt-service-calibre-web-automated-book-downloader`
- Path: `services/calibre-web-automated-book-downloader`
- Adapter ID: `service-calibre-web-automated-book-downloader`
- Category: `media`
- Homepage: https://sh1pt.com

## Scripts

- `build`: `tsc -p tsconfig.json`
- `prepublishOnly`: `pnpm build`
- `typecheck`: `tsc -p tsconfig.json --noEmit`

## Usage

```bash
pnpm add @profullstack/sh1pt-service-calibre-web-automated-book-downloader
```

## Development

```bash
pnpm --filter @profullstack/sh1pt-service-calibre-web-automated-book-downloader typecheck
```

Run tests from the repository root when this module includes a test file:

```bash
pnpm vitest run services/calibre-web-automated-book-downloader/src/index.test.ts
```
