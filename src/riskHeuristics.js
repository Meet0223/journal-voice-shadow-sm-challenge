function hasShadowSmToken(className) {
  return /\bshadow-sm\b/.test(className);
}

export function shouldUseUnsafeRecorderLifecycle(classSnapshot) {
  return (
    hasShadowSmToken(classSnapshot.textModeClass) ||
    hasShadowSmToken(classSnapshot.voiceModeClass) ||
    hasShadowSmToken(classSnapshot.submitButtonClass)
  );
}
