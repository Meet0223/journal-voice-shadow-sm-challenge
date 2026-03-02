const MODE_SEGMENT_BASE = 'flex-1 py-3 rounded-full flex-row items-center justify-center';

export function getTextModeClass(isActive) {
  return `${MODE_SEGMENT_BASE} ${isActive ? 'shadow-sm' : ''}`.trim();
}

export function getVoiceModeClass(isActive) {
  return `${MODE_SEGMENT_BASE} ${isActive ? 'shadow-sm' : ''}`.trim();
}

export function getSubmitButtonClass(isDisabled) {
  return `py-4 rounded-xl items-center justify-center shadow-sm ${
    isDisabled ? 'opacity-50' : 'opacity-100'
  }`;
}
