#!/usr/bin/env bash
set -euo pipefail

BEFORE_COMMIT="8b426b12f9fdfed52c56d6b5a5cd0ecde94c898b"
FIX_COMMIT="c556e23849247caf723926e7c01c9ffc892a7714"
TARGET_FILE="app/(tabs)/journal/exploration.tsx"

ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/../../.." && pwd)"
cd "$ROOT_DIR"

die() {
  echo "FAIL: $1" >&2
  exit 1
}

for commit in "$BEFORE_COMMIT" "$FIX_COMMIT"; do
  git cat-file -e "${commit}^{commit}" 2>/dev/null || die "Missing commit ${commit}."
done

actual_parent="$(git rev-parse "${FIX_COMMIT}^")"
[[ "$actual_parent" == "$BEFORE_COMMIT" ]] || die "Fix commit parent mismatch."

before_source="$(git show "${BEFORE_COMMIT}:${TARGET_FILE}")"
after_source="$(git show "${FIX_COMMIT}:${TARGET_FILE}")"
fix_diff="$(git show --no-color "$FIX_COMMIT" -- "$TARGET_FILE")"

count_occurrences() {
  awk -v RS="$2" 'END { print NR - 1 }' <<<"$1"
}

before_shadow_count="$(count_occurrences "$before_source" "shadow-sm")"
after_shadow_count="$(count_occurrences "$after_source" "shadow-sm")"

[[ "$before_shadow_count" -gt 0 ]] || die "Before commit has no shadow-sm references."
[[ "$after_shadow_count" -eq 0 ]] || die "Fix commit still contains shadow-sm references."

grep -Fq -- '-                    className="rounded-3xl p-6 mb-8 shadow-sm"' <<<"$fix_diff" || {
  die "Expected question-card shadow removal not found in fix diff."
}
grep -Fq -- '-                        className={`py-4 rounded-xl items-center justify-center shadow-sm ${userInput.trim().length < 5 ? '\''opacity-50'\'' : '\''opacity-100'\''}`}' <<<"$fix_diff" || {
  die "Expected action-button shadow removal not found in fix diff."
}

echo "PASS: Challenge verified."
echo "  before commit : ${BEFORE_COMMIT}"
echo "  fix commit    : ${FIX_COMMIT}"
echo "  shadow-sm count in before snapshot : ${before_shadow_count}"
echo "  shadow-sm count in fix snapshot    : ${after_shadow_count}"
