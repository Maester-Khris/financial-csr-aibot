# Landing Page Redesign Plan: Enterprise Fintech Skin

Based on the `product-backlog.md` and the UI design research (`competitor-ux.md`), the landing page needs to shift from a standard SaaS look to a serious, high-end, enterprise-grade fintech aesthetic (drawing from Mercury, Stripe, and Modern Treasury).

Here is the step-by-step plan to implement this "fintech skin" in `Landing.tsx` and `Landing.css`:

## 1. Restrict the Color Palette (Near-Monochrome + 1 Accent)
- **Backgrounds:** Use crisp `#FFFFFF` for light sections and `#0F1423` (near-black, slightly blue-tinted) for the full-bleed hero section.
- **Surfaces/Cards:** Use `#18181B` for panels in dark sections. White cards in light sections should have subtle `#E5E7EB` 1px borders.
- **Accent:** Restrict all saturated decorative color to exactly one primary accent blue (`#3B82F6`) for the main CTA and active states, with `#0A66C2` for hover.
- **Status only:** Green (`#16A34A`), amber (`#D97706`), and red (`#DC2626`) are reserved *strictly* for status badges/pills (e.g., confidence scores, balanced checks), never for decoration.

## 2. Typography Discipline
- **Prose & Headings:** Use `Inter`. The hero headline must be large (~64px) but restrained (weight 500) to convey a calm, editorial feel, not a loud startup shout.
- **Data & Numbers:** Enforce `Geist Mono` or `JetBrains Mono` for *every* data point in the mockup: session IDs, timestamps, dollar amounts, confidence percentages, and coordinates. This is the hallmark of a dense, serious ops tool.

## 3. Redesign the Hero Mockup
The hero visual must dramatize the product's automation. It will feature a static, highly realistic chat exchange:
- **User Message:** Rendered as a solid blue message pill (`#3B82F6`), right-aligned.
- **Assistant Prose:** Plain text, left-aligned, marked with a minimal "sparkle" AI glyph.
- **Citation Card:** A distinct bordered card directly under the text containing the document name, page, coordinates, and a mono-styled confidence badge.
- **Tool-Call Card:** A "receipt-style" structured ledger card showing the proposed journal entry with a primary "Confirm & Post Entry" button, demonstrating the confirm-before-post invariant.

## 4. Crisp Geometry & Spacing
- **Corners:** Enforce an 8px border radius on all cards and buttons. They must be crisp and buttoned-down, not bubbly or fully rounded (only status badges get full pill-radius).
- **Rhythm:** Use a strict 8px base grid, with an 80px vertical rhythm (`--space-section`) separating marketing sections.

## 5. Remove Extraneous Fluff
- Strip out heavy or springy animations. Limit motion to fast 150-200ms fades and color transitions.
- Ensure no "Sign up" or "Log in" buttons are present, as auth is explicitly out of scope per the backlog. Keep the CTA as "See it in action".
