import assert from 'node:assert/strict';
import test from 'node:test';

import { createJournalExplorationController } from '../src/journalExplorationController.js';

function flushTimers() {
  return new Promise((resolve) => {
    setTimeout(resolve, 10);
  });
}

test('voice flow should not lose navigation context during rapid close', async () => {
  const controller = createJournalExplorationController();

  controller.openVoiceInput();
  controller.startRecording();
  controller.closeVoiceInput();

  await flushTimers();

  assert.equal(
    controller.getLastError(),
    null,
    `Expected no navigation context error, received: ${
      controller.getLastError()?.message ?? 'unknown error'
    }`
  );
});

test('voice mode snapshot should include the expected segmented-control classes', () => {
  const controller = createJournalExplorationController();
  controller.openVoiceInput();

  const snapshot = controller.getClassSnapshot();
  assert.ok(snapshot);
  assert.match(snapshot.textModeClass, /\brounded-full\b/);
  assert.match(snapshot.voiceModeClass, /\brounded-full\b/);
});
