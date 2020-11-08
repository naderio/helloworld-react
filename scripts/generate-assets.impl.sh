#!/usr/bin/env bash
set -eou pipefail

./scripts/generate-app-icon.favicon.sh assets/icon.svg

./scripts/generate-app-icon.pwa.sh assets/icon.svg

./scripts/generate-static-image.sh assets/logo.svg

./scripts/generate-image-bitmap.sh assets/logo.svg
