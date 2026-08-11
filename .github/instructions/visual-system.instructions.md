---
description: "Use when designing, revising, or reviewing the blog's visual system, Astro components, CSS, article graphics, presentation surfaces, favicon, palette, typography, or layout. Anchors future visual agents on the Walking Deck section 05 aesthetic."
applyTo: "astro-site/src/**/*.astro,astro-site/src/**/*.css,astro-site/src/**/*.ts,astro-site/src/content/**/*.md,astro-site/public/**/*.svg"
---

# Visual System

Use the Walking Deck, especially `/career/walking-deck/present` section 05 (`signal-impact`), as the visual north star: deep ink structure, bright process-blue signal, warm paper surfaces, and selective gold/periwinkle/mint accents. The current selected site palette is the "Mako Refined" direction: deep blue-black anchors, warm cream reading surfaces, process-blue signal, and restrained gold energy.

## Palette

- `#132235` Ink: primary text, structural dark panels, and high-contrast outlines.
- `#0a2130` Blue black: immersive dark backgrounds and presentation-depth surfaces.
- `#06171f` Ink depth: darkest stage color for cinematic page anchors.
- `#143247` Stage mid: lower-gradient dark blue used inside large immersive bands.
- `#fbfaf6` Paper: warm light surfaces and favicon/background relief.
- `#f4f1ea` Warm paper: main page field and calm editorial surface.
- `#e9e2d4` Deep paper: footer/background depth and long-page tonal grounding.
- `#008fd3` Process blue: primary accent for section kickers, links, active states, and visual signal. Prefer this over the previous dark green `#0e6a61` when readability matters.
- `#34baff` Bright blue: emphasis on dark backgrounds, glows, tiny icon details, and high-energy signal marks.
- `#f4c430` Signal gold: sparing highlight for achievement, value, and key moments.
- `#a5b8ee` Periwinkle: atmospheric technical depth and soft secondary fills.
- `#e2f9d9` Mint: quiet relief, success tint, and light supporting contrast.

## Usage Rules

- Prioritize readability before mood. If a color looks rich but text does not read cleanly, choose the clearer option.
- Avoid one-note green/teal palettes. The previous dark green accent can appear too muted and should not be the default signal color.
- Let process blue carry interactive and navigational meaning; do not wash every panel in blue.
- Use gold, periwinkle, and mint as supporting notes, not equal-weight brand colors.
- Keep the blog editorial and personal, not like a generic SaaS dashboard: warm paper, calm panels, generous prose rhythm, and intentional dark immersive moments.
- When a page opens with a cinematic hero, the body needs its own authored rhythm: a strong editorial lead module, supporting cards or rails, and at least one later dark anchor when the page is long enough. Do not let the page fall from a designed hero into generic stacked panels.
- When extending an existing visual pattern across sibling routes, match the pattern's behavior as well as its palette and spacing. If the baseline page uses animated energy fields, rails, reveal timing, or threshold movement, the related pages need equivalent dynamism or an explicit design reason for staying still.
- For visual-heavy components, validate in the browser and inspect screenshots at the real laptop viewport (`laptop-chrome`, about 1214x770) before declaring the work done.

## Composition Gates

- Judge pages as whole compositions, not isolated components. Check the first viewport, the hero-to-body handoff, the middle-body rhythm, the final band, and the footer together.
- Keep a placeholder ledger for active monograms, letter tiles, icon fallbacks, fake logos, and temporary assets. A component or article with a live fallback is incomplete until the real asset is supplied or the fallback is intentionally approved.
- For page-family or sitewide work, name the baseline page before editing, then compare both static composition and motion parity across the target pages. A single static screenshot is not enough when the baseline relies on animation for its visual language.
- Section transitions must look authored. Avoid broad foggy washes, random exposed background bands, or abrupt palette jumps that make the next section feel like a different site.
- Hover and focus states are part of the visual system. Test primary/secondary CTAs, nav links, cards, and archive links on their actual backgrounds; shadows should lift without creating muddy rectangles or overpowering the surrounding stage.
- If a screenshot shows an unrelated-looking panel, debug overlay, corrupted text, or visual artifact, treat it as a failed render until disproved. Do not explain it away from source inspection alone.
- For homepage or sitewide visual changes, capture at least: normal laptop-chrome, relevant hover/focus state, mobile portrait, and reduced-motion state. Remove generated screenshots unless they are intentionally tracked artifacts.

## Color Roles

- Structure: use ink and blue-black for page stages, dark panels, high-contrast headings, and cinematic depth.
- Reading surface: use warm paper and cream tones for prose-heavy regions so the site still feels like an operator notebook.
- Signal: reserve process blue and bright blue for navigation, kickers, active states, links, CTAs, thin rails, and small luminous details.
- Depth and pacing: use signal gold, periwinkle, and mint as atmospheric glows, gradients, and section handoff accents. They should shape rhythm without becoming the dominant brand color.
- Avoid greenish page washes unless there is a specific content reason. If a gradient starts reading teal/green by accident, rebalance toward blue-black, paper, gold, or periwinkle.

## Concept Quality Gate

- Before building a substantial visual or presentation, name the visual model, primary focal path, state sequence, and source assets. Compare at least two materially different concepts when the best form is not already clear.
- Select the concept against teaching clarity, source fidelity, visual distinctiveness, responsive viability, and presentability. A palette change does not make a second concept.
- Reject equal-card grids, pill collections, generic arrows, and stacked panels as defaults unless that visual grammar directly teaches the idea.
- Give each scene one authored mechanism, such as progressive assembly, state comparison, signal travel, direct manipulation, spatial zoom, or evidence reveal. Keep a scene static when movement would not improve understanding.
- Define the stable hold frame first. Entry, build, interaction, and exit states must support that frame instead of competing with it.

## Motion Language

- Use Walking Deck section 05 as the motion north star: cinematic stage energy, luminous rails, depth shifts, and reveal timing that feels authored.
- The motion inspiration can nod to Final Fantasy VII Remake: tactical UI pacing, energy lines, staged reveals, and charged signal moments. Do not copy game UI chrome, logos, or ornamental fantasy styling.
- Prefer transform and opacity. Avoid animation that depends on heavy blur, layout shifts, or paint-expensive effects.
- Prefer contained pseudo-element energy fields, pulse rails, and scan highlights over many independently animated DOM children. If a motion layer causes screenshot/rendering artifacts, simplify the layer before shipping.
- Motion should teach hierarchy: first the stage, then the message, then the supporting card or action. Random card wiggles and decorative motion are not part of the system.
- Existing motion patterns are part of the component contract. Before adapting a stage, hero, card system, or section handoff, inventory the baseline pseudo-elements, keyframes, transition delays, and reduced-motion behavior. Reuse or deliberately adapt those patterns instead of stopping at color and layout parity.
- Verify motion directly. Use two time-separated captures, browser animation inspection, or computed animation names to confirm that motion is present, legible, and not corrupting text. Then confirm reduced motion removes the movement without hiding content.
- Use scroll-linked motion only as progressive emphasis on normal scrolling, such as rails filling, cards revealing, or section atmosphere shifting. Avoid scrolljacking, direction changes, or interactions that make users work to read text.
- Every new motion pattern must respect reduced motion and leave critical navigation/content readable when JavaScript fails.

## Interaction Language

- Decide whether interaction improves the teaching point before implementation. Use it when readers learn by comparing states, tracing a relationship, inspecting detail, changing a filter, navigating a process, or testing a decision. Keep a visual static when one clear frame teaches faster.
- Make interaction change meaningful information or viewpoint. A hover glow, tilt, parallax response, or cursor-following effect alone does not satisfy this rule.
- Treat pointer input as one path, not the contract. Any teaching state available by mouse or pointer must also work with touch and keyboard through clear controls or native interactive elements. Preserve visible focus, useful accessible names, and programmatic state such as `aria-pressed`, `aria-selected`, or an announced status when appropriate.
- Do not hide essential meaning behind hover. Hover can preview or reinforce a state, but tap, click, and keyboard input must expose the same useful content.
- Build interaction as progressive enhancement. The initial HTML must contain a coherent reading order, labels, and the useful default or summary state before client JavaScript runs. A script failure must not turn the figure into an empty stage.
- Reduced motion must remove or shorten animated travel without removing the interaction or its result. State changes can become immediate while controls and content remain available.
- Inspect `ThreeNewYears.astro` for direct manipulation and keyboard navigation, and `CharlotteArtsMap.astro` for explicit controls and useful no-JavaScript content. Treat them as evidence patterns, not complete templates; verify each new visual against the full contract above.
- Prove interaction in the rendered page. Capture the initial state and at least one changed teaching state produced by a real pointer action, then verify the equivalent keyboard path and the mobile touch-sized control path. A static screenshot of the default frame is not sufficient evidence for an interactive visual.

## Favicon Direction

- Avoid plain `TD` initial marks that can read like TD Bank.
- The selected direction is a light-background TD monogram where a process-blue lightning bolt is the shared stem of the T and spine of the D.
- When revising favicon assets, review at 16, 32, 64, and 180px before finalizing SVG, ICO, and Apple touch assets.

## Review Template

When judging a visual change, answer these before finishing:

- Does it feel connected to Walking Deck section 05 without copying it literally?
- Is the signal color readable on its actual background?
- Does the design still feel like Thor's operator notebook, not a product marketing page?
- If this page is meant to match an animated baseline, does it preserve equivalent dynamism rather than only matching the still frame?
- Do hover/focus states and section handoffs still feel controlled at the real rendered viewport?
- Does it survive the relevant viewport and screenshot checks?