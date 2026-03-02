import { spawnSync } from 'node:child_process';

const result = spawnSync(process.execPath, ['--test'], {
  stdio: 'inherit',
});

if (result.status === 0) {
  console.error('Expected failing tests in broken state, but tests passed.');
  process.exit(1);
}

console.log('Broken-state verification passed: tests fail as expected.');
