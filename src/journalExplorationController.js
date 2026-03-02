import { createNavigationContext } from './navigationContext.js';
import { shouldUseUnsafeRecorderLifecycle } from './riskHeuristics.js';
import {
  getSubmitButtonClass,
  getTextModeClass,
  getVoiceModeClass,
} from './uiClassNames.js';
import { createVoiceRecorderEngine } from './voiceRecorderEngine.js';

export function createJournalExplorationController() {
  const navigation = createNavigationContext();
  let recorder = null;
  let lastError = null;
  let classSnapshot = null;

  return {
    openVoiceInput() {
      classSnapshot = {
        textModeClass: getTextModeClass(false),
        voiceModeClass: getVoiceModeClass(true),
        submitButtonClass: getSubmitButtonClass(false),
      };

      const unsafeCallbackAfterUnmount = shouldUseUnsafeRecorderLifecycle(classSnapshot);

      recorder = createVoiceRecorderEngine({
        unsafeCallbackAfterUnmount,
        onRecordingComplete() {
          try {
            navigation.push('/(tabs)/journal/exploration');
          } catch (error) {
            lastError = error;
          }
        },
      });
    },
    startRecording() {
      if (!recorder) {
        throw new Error('Voice recorder is not mounted. Call openVoiceInput() first.');
      }
      recorder.start();
    },
    closeVoiceInput() {
      if (recorder) recorder.unmount();
      navigation.deactivate();
    },
    getLastError() {
      return lastError;
    },
    getClassSnapshot() {
      return classSnapshot;
    },
  };
}
