# Reframe Voice Navigation Context Repro

Sanitized minimal repro of a journal exploration voice-input bug.

Observed behavior:
- During rapid close/unmount around recording completion, the flow can throw a navigation-context error.

## Commands From `git clone`

```bash
git clone https://github.com/Meet0223/journal-voice-shadow-sm-challenge.git
cd journal-voice-shadow-sm-challenge
npm install
npm test
```

Expected initial result:
- At least one failing test in the cloned state.

## Task

Fix the implementation so tests pass, without editing tests.

Relevant files:
- `src/journalExplorationController.js`
- `src/uiClassNames.js`
- `src/riskHeuristics.js`

## Notes

- This repository intentionally starts in a failing state.
- If you want to retry from a clean baseline, use `git restore .`.
