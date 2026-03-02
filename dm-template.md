I submitted a sanitized repro for a journal voice/navigation-context bug that looked like router/audio timing but was actually triggered by `shadow-sm` usage in voice-flow controls.

Clone and run:

```bash
git clone https://github.com/<your-username>/reframe-voice-shadow-sm-repro.git
cd reframe-voice-shadow-sm-repro
npm run verify:broken
```

Then verify example solution:

```bash
npm run verify:fixed
```

Agent task:
- Start from broken state and make `npm test` pass without editing tests.
