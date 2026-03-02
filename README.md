# Reframe Voice `shadow-sm` Navigation Context Challenge

This is a sanitized, minimal repro of a journal exploration bug:

- Flow: `Reframe -> Let me think... -> Voice`
- Symptom: navigation-context failure during rapid close/unmount around recording completion.
- Root trigger in this repro: `shadow-sm` class tokens in the voice-flow segmented controls.

The repository starts in a broken state.

## Commands (from `git clone`)

```bash
git clone https://github.com/<your-username>/reframe-voice-shadow-sm-repro.git
cd reframe-voice-shadow-sm-repro
npm run verify:broken
```

Expected output for broken state:
- Broken verification passes by confirming tests fail (`Broken-state verification passed`).

To validate an example fix:

```bash
npm run verify:fixed
```

Expected output for fixed state:
- Test suite passes.

## Agent Task

Starting from broken state, make `npm test` pass without modifying tests.

Primary files:
- `src/journalExplorationController.js`
- `src/uiClassNames.js`
- `src/riskHeuristics.js`

## Included Example Solution

- `solution.patch` contains one valid fix path.
- `npm run apply:solution` copies the fixed file snapshot, then `npm test` should pass.

## Why This Is Non-Obvious

Failure appears as navigation context instability, but the trigger is style-token-driven risk gating (`shadow-sm`) in the voice flow classes.
