const MODE_SEGMENT_BASE = 'flex-1 py-3 rounded-full flex-row items-center justify-center';

export function getTextModeClass(_isActive) {
  return MODE_SEGMENT_BASE;
}

export function getVoiceModeClass(_isActive) {
  return MODE_SEGMENT_BASE;
}

export function getSubmitButtonClass(isDisabled) {
  return `py-4 rounded-xl items-center justify-center ${
    isDisabled ? 'opacity-50' : 'opacity-100'
  }`;
}
