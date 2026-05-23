import { mkdir, readFile, readdir, stat, writeFile } from 'node:fs/promises';
import { basename, join, relative } from 'node:path';

const ROOTS = ['packages', 'services'];

const repoRoot = process.cwd();

const moduleDirs = [];
for (const root of ROOTS) {
  await collectPackageDirs(join(repoRoot, root));
}

let written = 0;
for (const dir of moduleDirs.sort()) {
  const readmePath = join(dir, 'README.md');
  if (await exists(readmePath)) continue;
  const packageJson = JSON.parse(await readFile(join(dir, 'package.json'), 'utf8'));
  const source = await readSourceIndex(dir);
  const meta = extractAdapterMeta(source);
  const rel = relative(repoRoot, dir).replace(/\\/g, '/');
  const title = ascii(meta.label ?? titleFromPackageName(packageJson.name, rel));
  const description = sentence(ascii(meta.description ?? packageJson.description ?? `sh1pt module for ${title}.`));
  const category = meta.category;
  const id = meta.id;
  const packageName = packageJson.name;
  const npmInstall = packageName ? `pnpm add ${packageName}` : null;

  const sections = [
    `# ${title}`,
    '',
    description,
    '',
    '## Package',
    '',
    `- Name: \`${ascii(packageName)}\``,
    `- Path: \`${rel}\``,
  ];

  if (id) sections.push(`- Adapter ID: \`${ascii(id)}\``);
  if (category) sections.push(`- Category: \`${ascii(category)}\``);
  if (packageJson.homepage) sections.push(`- Homepage: ${packageJson.homepage}`);

  const scripts = packageJson.scripts && typeof packageJson.scripts === 'object'
    ? Object.keys(packageJson.scripts).sort()
    : [];
  if (scripts.length > 0) {
    sections.push('', '## Scripts', '');
    for (const script of scripts) {
      sections.push(`- \`${script}\`: \`${packageJson.scripts[script]}\``);
    }
  }

  sections.push('', '## Usage', '');
  if (npmInstall) {
    sections.push('```bash', ascii(npmInstall), '```');
  } else {
    sections.push('This module is consumed from the sh1pt workspace.');
  }

  sections.push(
    '',
    '## Development',
    '',
    '```bash',
    `pnpm --filter ${ascii(packageName ?? rel)} typecheck`,
    '```',
    '',
    'Run tests from the repository root when this module includes a test file:',
    '',
    '```bash',
    `pnpm vitest run ${rel}/src/index.test.ts`,
    '```',
    '',
  );

  await writeFile(readmePath, `${sections.join('\n')}`, 'utf8');
  written++;
}

console.log(`Generated ${written} README.md files.`);

async function collectPackageDirs(dir) {
  const entries = await readdirSafe(dir);
  if (entries.includes('package.json')) {
    moduleDirs.push(dir);
    return;
  }
  for (const entry of entries) {
    if (entry === 'node_modules' || entry.startsWith('.')) continue;
    const child = join(dir, entry);
    if ((await stat(child)).isDirectory()) {
      await collectPackageDirs(child);
    }
  }
}

async function readSourceIndex(dir) {
  const path = join(dir, 'src', 'index.ts');
  if (!(await exists(path))) return '';
  return readFile(path, 'utf8');
}

function extractAdapterMeta(source) {
  return {
    id: extractStringProperty(source, 'id'),
    label: extractStringProperty(source, 'label'),
    category: extractStringProperty(source, 'category'),
    description: extractStringProperty(source, 'description'),
  };
}

function extractStringProperty(source, property) {
  const re = new RegExp(`\\b${property}\\s*:\\s*(['"\`])([^'"\`]+)\\1`);
  const match = re.exec(source);
  return match?.[2];
}

function titleFromPackageName(packageName, rel) {
  const name = packageName ? packageName.split('/').pop() ?? packageName : basename(rel);
  return name
    .replace(/^sh1pt-/, '')
    .replace(/^(package|service|target|adapter)-/, '')
    .split('-')
    .filter(Boolean)
    .map((part) => part.length <= 3 ? part.toUpperCase() : part[0].toUpperCase() + part.slice(1))
    .join(' ');
}

function sentence(text) {
  const trimmed = String(text).trim();
  if (!trimmed) return 'sh1pt module.';
  return /[.!?]$/.test(trimmed) ? trimmed : `${trimmed}.`;
}

function ascii(text) {
  return String(text)
    .replace(/[–—]/g, '-')
    .replace(/[‘’]/g, "'")
    .replace(/[“”]/g, '"')
    .replace(/…/g, '...')
    .replace(/→/g, '->')
    .replace(/·/g, '-')
    .replace(/[^\x09\x0A\x0D\x20-\x7E]/g, '');
}

async function exists(path) {
  try {
    await stat(path);
    return true;
  } catch {
    return false;
  }
}

async function readdirSafe(dir) {
  try {
    return await readdir(dir);
  } catch {
    await mkdir(dir, { recursive: true });
    return [];
  }
}
