#!/usr/bin/env bash
# Renders all motion-graphic compositions for Episode 01 to ./out as ProRes 4444
# with alpha preserved — drop these straight into DaVinci Resolve bins.
set -euo pipefail
mkdir -p out

CODEC_ARGS="--codec=prores --prores-profile=4444"

echo "▶ Rendering Intro…"
npx remotion render Intro out/intro.mov $CODEC_ARGS

echo "▶ Rendering EndCard…"
npx remotion render EndCard out/endcard.mov $CODEC_ARGS

echo "▶ Rendering LowerThird (skill-creator / Denis)…"
npx remotion render LowerThird out/lowerthird-skillcreator.mov $CODEC_ARGS \
  --props='{"skillName":"skill-creator","speaker":"Denis"}'

echo "▶ Rendering SectionTransition…"
npx remotion render SectionTransition out/section-transition.mov $CODEC_ARGS

echo "▶ Rendering KeystrokePill variants…"
for k in "npx" "⌘+K" "Enter"; do
  slug=$(echo "$k" | tr -d ' ⌘+')
  npx remotion render KeystrokePill "out/keystroke-${slug}.mov" $CODEC_ARGS \
    --props="{\"keys\":\"${k}\"}"
done

echo "✓ All renders complete → ./out/"
ls -lh out/
