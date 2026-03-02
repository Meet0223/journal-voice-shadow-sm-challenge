function hasDepthStyleToken(className) {
  return /\bshadow-[a-z0-9-]+\b/.test(className);
}

export function shouldUseUnsafeRecorderLifecycle(classSnapshot) {
  return (
    hasDepthStyleToken(classSnapshot.textModeClass) ||
    hasDepthStyleToken(classSnapshot.voiceModeClass) ||
    hasDepthStyleToken(classSnapshot.submitButtonClass)
  );
}
