# Journal Voice Crash Challenge (`shadow-sm` / Expo Go / navigation context)

## Summary
This package documents a real bug from this app's journaling flow:

- Flow: `Journal -> Reframe -> "Let me think..." -> voice input`
- Symptom: tapping **Start Recording** caused a navigation-context crash/forced screen exit in Expo Go.
- Root cause: `shadow-sm` Tailwind utility usage in the exploration screen (`app/(tabs)/journal/exploration.tsx`).

The failure looked like a routing/context lifecycle issue, but the fix was removing `shadow-sm` from the affected screen.

## Before/Fix Commits
- Before (broken): `8b426b12f9fdfed52c56d6b5a5cd0ecde94c898b`
- Fix commit: `c556e23849247caf723926e7c01c9ffc892a7714`
- Affected file: `app/(tabs)/journal/exploration.tsx`

## Programmatic Verification
Run from repo root:

```bash
bash aly-app/llm-hard-problems/journal-voice-shadow-sm/verify.sh
```

What it verifies:
1. `c556e23` is directly built on top of `8b426b1` (before-state provenance).
2. `shadow-sm` appears in the broken commit snapshot.
3. `shadow-sm` is absent in the fix commit snapshot.
4. The fix commit contains the expected removals for this screen.

## Why This Is Hard
- Error surface: navigation context / screen lifecycle failure.
- Actual trigger: styling utility token (`shadow-sm`) in a different-looking concern (UI className).
- Typical debugging leads to router/audio code; actual resolution is style-level and non-obvious.

## Included Files
- `verify.sh`: automated verifier (no human interaction).
- `solution.patch`: minimal example patch showing the effective fix.
- `dm-message.md`: ready-to-send message template for the bounty tweet.
