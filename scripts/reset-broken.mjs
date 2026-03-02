import { copyFileSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const scriptDir = dirname(fileURLToPath(import.meta.url));
const rootDir = resolve(scriptDir, '..');

copyFileSync(
  resolve(rootDir, 'fixtures/broken/uiClassNames.js'),
  resolve(rootDir, 'src/uiClassNames.js')
);

console.log('Reset to broken state (shadow-sm present).');
