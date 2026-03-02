I have a reproducible mobile bug challenge from a production Expo Router app that current top models struggled with.

Problem:
- In the journaling flow (`Reframe -> "Let me think..." -> voice input`), tapping Start Recording caused a navigation-context crash / screen exit in Expo Go.
- The issue looked like router/audio lifecycle logic, but the actual root cause was `shadow-sm` Tailwind classes in the exploration screen.

Verification requirements:
- Programmatically verifiable: yes (`verify.sh` checks before/fix commit lineage and code-level trigger removal).
- Before-state commit: `8b426b12f9fdfed52c56d6b5a5cd0ecde94c898b`
- Fix commit: `c556e23849247caf723926e7c01c9ffc892a7714`
- Example solution patch: included (`solution.patch`)

Local verify:
```bash
bash aly-app/llm-hard-problems/journal-voice-shadow-sm/verify.sh
```

If useful, I can also send the exact route reproduction steps used in Expo Go.
