import { readFileSync, writeFileSync, readdirSync, statSync } from 'fs';
import { join } from 'path';

const replacements = {
  '\u2018': "'", '\u2019': "'",
  '\u201c': '"', '\u201d': '"',
  '\u2013': '-', '\u2014': '-',
  '\u2026': '...', '\u00a0': ' ',
};

function sanitizeFile(filePath) {
  let content = readFileSync(filePath, 'utf-8');
  let changed = false;
  for (const [bad, good] of Object.entries(replacements)) {
    if (content.includes(bad)) {
      content = content.split(bad).join(good);
      changed = true;
    }
  }
  if (changed) {
    writeFileSync(filePath, content, 'utf-8');
    console.log(`Sanitized: ${filePath}`);
  }
}

function walkDir(dir) {
  for (const file of readdirSync(dir)) {
    const full = join(dir, file);
    if (statSync(full).isDirectory() && !file.startsWith('.') && file !== 'node_modules') {
      walkDir(full);
    } else if (file.endsWith('.tsx') || file.endsWith('.ts')) {
      sanitizeFile(full);
    }
  }
}

walkDir('./src');
console.log('Sanitization complete.');
