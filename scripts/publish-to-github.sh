#!/usr/bin/env bash
# Creates two public repos under the authenticated GitHub user and pushes to them:
#   1. umarfarooq-ai            -> this portfolio project
#   2. <username>/<username>    -> the profile README shown on the GitHub profile front page
# Needs GITHUB_TOKEN (classic: "repo" scope, or fine-grained with Administration + Contents write).
set -euo pipefail

: "${GITHUB_TOKEN:?Set GITHUB_TOKEN first}"
OWNER="${GITHUB_OWNER:-contacttoumar}"
PROJECT_REPO="${PROJECT_REPO:-umarfarooq-ai}"
ROOT="$(cd "$(dirname "$0")/.." && pwd)"
API="https://api.github.com"

create_repo() {
  local name="$1" desc="$2" code
  code=$(curl -s -o /tmp/gh_create.json -w "%{http_code}" -X POST "$API/user/repos" \
    -H "Authorization: Bearer $GITHUB_TOKEN" -H "Accept: application/vnd.github+json" \
    -d "{\"name\":\"$name\",\"description\":\"$desc\",\"private\":false,\"auto_init\":false}")
  case "$code" in
    201) echo "created $OWNER/$name" ;;
    422) echo "$OWNER/$name already exists, reusing" ;;
    *) echo "failed to create $name (HTTP $code)"; cat /tmp/gh_create.json; exit 1 ;;
  esac
}

push_url() { echo "https://x-access-token:${GITHUB_TOKEN}@github.com/$OWNER/$1.git"; }

create_repo "$PROJECT_REPO" "Umar Farooq - AI Engineer and Solution Architect portfolio (Next.js)"
cd "$ROOT"
git push "$(push_url "$PROJECT_REPO")" HEAD:main

create_repo "$OWNER" "Profile README"
TMP="$(mktemp -d)"
cp "$ROOT/github-profile/README.md" "$TMP/README.md"
git -C "$TMP" init -q -b main
git -C "$TMP" add README.md
git -C "$TMP" -c user.name="Umar Farooq" -c user.email="umar7400@gmail.com" commit -q -m "Add profile README"
git -C "$TMP" push --force "$(push_url "$OWNER")" main
rm -rf "$TMP"

echo "Done: https://github.com/$OWNER  and  https://github.com/$OWNER/$PROJECT_REPO"
