---
description: "Use when designing, revising, or reviewing the blog's visual system, Astro components, CSS, article graphics, presentation surfaces, favicon, palette, typography, or layout. Anchors future visual agents on the Walking Deck section 05 aesthetic."
applyTo:
  - "astro-site/src/**/*.astro"
  - "astro-site/src/**/*.css"
  - "astro-site/src/**/*.ts"
  - "astro-site/src/content/**/*.md"
  - "astro-site/public/**/*.svg"
---

# Blog Visual System

Use the Walking Deck, especially `/career/walking-deck/present` section 05 (`signal-impact`), as the visual north star: deep ink structure, bright process-blue signal, warm paper surfaces, and selective gold/periwinkle/mint accents.

## Palette

- `#132235` Ink: primary text, structural dark panels, and high-contrast outlines.
- `#091f2c` Blue black: immersive dark backgrounds and presentation-depth surfaces.
- `#fbfaf6` Paper: warm light surfaces and favicon/background relief.
- `#008fd3` Process blue: primary accent for section kickers, links, active states, and visual signal. Prefer this over the previous dark green `#0e6a61` when readability matters.
- `#2bb8ff` Bright blue: emphasis on dark backgrounds, glows, tiny icon details, and high-energy signal marks.
- `#fadc14` Signal gold: sparing highlight for achievement, value, and key moments.
- `#a5b8ee` Periwinkle: atmospheric technical depth and soft secondary fills.
- `#e2f9d9` Mint: quiet relief, success tint, and light supporting contrast.

## Usage Rules

- Prioritize readability before mood. If a color looks rich but text does not read cleanly, choose the clearer option.
- Avoid one-note green/teal palettes. The previous dark green accent can appear too muted and should not be the default signal color.
- Let process blue carry interactive and navigational meaning; do not wash every panel in blue.
- Use gold, periwinkle, and mint as supporting notes, not equal-weight brand colors.
- Keep the blog editorial and personal, not like a generic SaaS dashboard: warm paper, calm panels, generous prose rhythm, and intentional dark immersive moments.
- For visual-heavy components, validate in the browser and inspect screenshots at the real laptop viewport (`laptop-chrome`, about 1214x770) before declaring the work done.

## Favicon Direction

- Avoid plain `TD` initial marks that can read like TD Bank.
- The selected direction is a light-background TD monogram where a process-blue lightning bolt is the shared stem of the T and spine of the D.
- When revising favicon assets, review at 16, 32, 64, and 180px before finalizing SVG, ICO, and Apple touch assets.

## Review Template

When judging a visual change, answer these before finishing:

- Does it feel connected to Walking Deck section 05 without copying it literally?
- Is the signal color readable on its actual background?
- Does the design still feel like Thor's operator notebook, not a product marketing page?
- Does it survive the relevant viewport and screenshot checks?