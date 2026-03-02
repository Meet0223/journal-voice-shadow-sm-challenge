import { copyFileSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const scriptDir = dirname(fileURLToPath(import.meta.url));
const rootDir = resolve(scriptDir, '..');

copyFileSync(
  resolve(rootDir, 'fixtures/fixed/uiClassNames.js'),
  resolve(rootDir, 'src/uiClassNames.js')
);

console.log('Applied solution (shadow-sm removed from voice-flow controls).');
