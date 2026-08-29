#!/usr/bin/env bash
set -euo pipefail
cd "$(dirname "$0")"

export_symbol() {
  local size="$1"
  local inset=$((size * 7 / 8))
  convert -background none -density 1200 symbol.svg \
    -resize "${inset}x${inset}" -gravity center -extent "${size}x${size}" \
    "symbol-${size}.png"
}

export_symbol 256
export_symbol 512
export_symbol 1024
convert -background none app-icon.svg -resize 1024x1024 app-icon-1024.png
convert -background none og-preview.svg -resize 1200x630 og-preview.png
convert -background none ../favicon.svg -resize 32x32 ../favicon-32x32.png
convert -background none ../favicon.svg -resize 180x180 ../apple-touch-icon.png
