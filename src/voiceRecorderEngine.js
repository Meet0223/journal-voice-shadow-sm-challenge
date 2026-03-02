export function createVoiceRecorderEngine({ onRecordingComplete, unsafeCallbackAfterUnmount }) {
  let mounted = true;
  let started = false;

  return {
    start() {
      if (started) return;
      started = true;

      setTimeout(() => {
        if (!mounted && !unsafeCallbackAfterUnmount) {
          return;
        }

        onRecordingComplete({
          transcript: 'I needed more time to process this response.',
          audioUrl: 'mock://voice/journal/deep-reflection.m4a',
        });
      }, 0);
    },
    unmount() {
      mounted = false;
    },
  };
}
