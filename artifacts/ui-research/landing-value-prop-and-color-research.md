# Landing Page Research — Closing CTA & Background Color Rhythm

Date: 2026-09-05
Scope: two specific gaps flagged by the product owner on the existing landing
page (`frontend/src/screens/Landing.tsx`) — the closing CTA section and the
light/dark background rhythm. No code changes made; this is research only.
Builds on `artifacts/ui-research/competitor-ux.md` and
`docs/superpowers/specs/2026-09-03-ui-design-pipeline-design.md` — flagged
inline anywhere a finding here creates tension with those.

**Method note:** Mercury, Vanta, Linear, Modern Treasury, Brex, Rippling, and
Wise Business homepages were fetched live (via WebFetch) on 2026-09-05 and the
descriptions below reflect what was actually retrieved. Two live-fetch
attempts at `ramp.com`'s actual homepage both returned unrelated content (a
promotional/affiliate subpage, then a conversion-optimization
third-party write-up) rather than the real homepage DOM — for Ramp I've
fallen back to well-known, verifiable public knowledge of Ramp's design
(confirmed independently via a design-token reference site quoting Ramp's
own system: "black-and-white editorial system... warm off-white canvas,
white cards, hairline gray borders... chartreuse accent only where money
moves") plus what `competitor-ux.md` already captured directly. This is
flagged explicitly rather than presented as a live observation.

---

## A. Closing CTA patterns

What was actually found in the closing (pre-footer) section of each site:

| Company | Closing section content | Social proof present? |
|---|---|---|
| **Mercury** | Headline only ("Banking — redesigned from the ground up"), no body copy, 3 differentiated CTAs (Open account / Contact sales / Explore demo) | None in this section |
| **Linear** | Headline ("Built for the future. Available today."), no body copy, 4 differentiated CTAs by user intent (Get started / Contact sales / Open app / Download) | None in this section |
| **Rippling** | Headline + inline demo-request form (email capture), single CTA | None in this section |
| **Brex** | Headline + one sentence body copy, single CTA, large product visual | None in this section |
| **Wise Business** | Headline, no body copy, 2 CTAs (Open an account / Try a demo), decorative illustration | None |
| **Vanta** | Headline ("The new standard for trust"), single CTA, **dark background** (the one dark closing CTA among the sample) | Brand mascot only, no logos in *this* section (logos/badges live earlier on page) |
| **Modern Treasury** | Headline + one sentence, then **3 customer testimonial cards with logos** (Navan, Procore, Anchorage Digital) + newsletter signup | Yes — heaviest social-proof closing section in the sample |
| **Ramp** (reasoned from known design system, not live-fetched) | Ramp's real differentiator is dramatizing its own live product telemetry ("AGENTS AT WORK TODAY," "RECEIPTS PROCESSED: 1,280,294") as proof *instead of* logos or testimonials, per `competitor-ux.md`'s direct capture of the homepage — this pattern appears mid-page as the hero device, and is the most relevant Ramp pattern regardless of where exactly it recurs before the footer | Self-generated operational stats stand in for customer social proof |

### Pattern options

**1. Minimal headline + multiple differentiated CTAs, no body/no proof** (Mercury, Linear, Wise)
- *Pro:* Confident, doesn't oversell; scales cleanly when you have nothing to prove with logos yet.
- *Con:* Only works when you *have* multiple genuinely different CTAs to differentiate (signup vs. sales vs. existing-user login) — Ledger Assistant has exactly one CTA ("See it in action"), so copying this literally just means one lonely button, which is close to what's already "feeling too basic."

**2. Self-generated operational/product stats as proof, standing in for customer social proof** (Ramp's pattern)
- *Pro:* Directly solves the "no real customers" problem — the product's own demonstrated behavior becomes the proof, not a borrowed logo.
- *Con:* Ramp's numbers are real production telemetry (1.28M receipts processed); a demo/PoC with no live users can't honestly claim throughput numbers — this pattern is *not usable as-is* here without fabricating stats, which is worse than having no stats.

**3. Condensed product screenshot/demo as the closing visual** (Brex's pre-footer product visual; structurally closest to Stripe's Dashboard Assistant screenshot pattern already documented in `competitor-ux.md`)
- *Pro:* Lets the product argue for itself — showing the actual chat-with-citation-and-confirm-to-post interaction is a specific, checkable claim, not a generic promise; doesn't require any customer data to be honest.
- *Con:* Needs a real, good-looking screenshot/mock asset to exist and stay in sync with the actual UI, or it reads as decoration.

**4. Testimonial/logo social proof** (Modern Treasury's pattern)
- *Pro:* Highest-converting pattern in B2B generally, when available.
- *Con:* **Not viable here at all** — no real customers, logos, or testimonials exist, and fabricating any would misrepresent the product. Ruled out categorically, not just deprioritized.

**5. Security/compliance badges** (Vanta's core identity, though not literally in Vanta's own closing section per the fetch above — badges live mid-page)
- *Pro:* Strong trust signal for a finance-adjacent product category.
- *Con:* Ledger Assistant has no actual certifications (it's a demo/PoC) — displaying badges it hasn't earned would be a credibility risk, not a credibility boost, for a "technical reviewer" audience specifically primed to check claims.

### Recommendation

Use **pattern 3 (condensed product screenshot as proof) + a tight 3-bullet feature recap that restates specific, checkable claims** — not generic marketing bullets, but the three things that are actually true and differentiated: "cites the exact source page for every figure," "never posts to the ledger without human confirmation," "posts to a real double-entry ledger, not a mock." Keep the single "See it in action" CTA (there's only one path into the product; don't manufacture a second CTA just to mimic Mercury/Linear's multi-CTA pattern — that would misrepresent the product as having a signup/sales-contact flow it doesn't have). This is the closest fit for "serious B2B tool, no social proof yet, audience of technical evaluators who value specific verifiable claims over confidence-signaling copy" — it upgrades the section without asking it to fake proof it doesn't have (rules out patterns 2, 4, 5 outright).

---

## B. Section background color rhythm

What was actually found (live-fetched) on background rhythm, hero to footer:

- **Mercury:** light-dominant, hero white/light, subtle off-white/light-gray alternation mid-page, **dark charcoal footer only** — no dark mid-page sections at all (contradicts the "moody dark hero" impression from the marketing photography — the *photo* is dark/moody, the *page background* itself is light throughout).
- **Linear:** light-dominant throughout, minimal contrast shifts, relies on typography/imagery rather than background color changes for rhythm.
- **Rippling:** light/off-white throughout, dark footer only.
- **Brex:** light-dominant throughout, no dark sections found.
- **Wise Business:** light-dominant, "muted gray tints rather than true white" noted for section dividers, dark footer.
- **Vanta:** genuinely **alternates** light/dark full-bleed bands (light hero → light → dark "Agent" section → light → dark report section → light → **dark closing CTA** → dark footer) — the one site in the sample that behaves the way Ledger Assistant's current page structure is trying to.
- **Modern Treasury:** light-dominant, dark footer only, no mid-page dark bands.
- **Ramp** (known design system, not independently re-verified live): warm off-white canvas (not pure white) + white cards + hairline gray borders, single chartreuse accent — notable as a real, serious B2B fintech that avoided pure `#FFFFFF` as its base light color.

**Reading across these:** true alternating light/dark full-bleed bands (what Ledger Assistant is attempting) is the *less common* pattern — most serious B2B fintech sites here stay light-dominant with only the footer going dark, and treat "dark" as a rare accent move (Vanta) rather than a structural rhythm. This is worth flagging as a tension: Ledger Assistant's dark hero + dark "How it works" + dark CTA card structure is closer to Vanta's approach than to Mercury/Brex/Linear/Rippling's — that's a legitimate stylistic choice (it suits a denser, more technical "serious tool" register), but it means the fix is less "match the light sections to how competitors do off-white" and more "make Vanta's alternating-bands pattern work cleanly," since that's the one proven precedent for the structure already in place.

### Color-combination options (hex, plugging into existing tokens)

**Option 1 — Cool blue-tinted off-white (Stripe-docs-style)**
```
--color-bg-light: #F6F8FB   /* replaces plain #FFFFFF */
--color-border:   #E2E6EC   /* barely-darker cool gray, was #E5E7EB */
--color-bg-dark:  #0F1423   /* unchanged */
--color-accent:   #3B82F6   /* unchanged */
```
*Rationale:* Same blue hue family as `#0F1423`, just lightened almost to white — closes the gap between "near-black-blue" and "stark white" without introducing a new hue. Precedented: Stripe's docs site (well-known, verifiable) uses a near-identical light blue-tinted background instead of pure white for exactly this reason.

**Option 2 — Warm off-white / paper (Ramp-style)**
```
--color-bg-light: #FAFAF8   /* warm off-white canvas */
--color-bg-card:  #FFFFFF   /* cards stay pure white on top of it */
--color-border:   #E5E5E0   /* warm hairline gray, was #E5E7EB */
--color-bg-dark:  #0F1423   /* unchanged */
--color-accent:   #3B82F6   /* unchanged */
```
*Rationale:* Proven at a serious B2B fintech (Ramp) as a near-monochrome-plus-one-accent base. Tension to flag: warm off-white sits oddly against a *cool* blue-tinted dark hero (`#0F1423`) — this option reads best if the dark sections were also warmed slightly, which isn't being proposed here, so it's the weaker fit of the four unless the dark tokens change too.

**Option 3 — Compress the "white sandwich" into one continuous dark opening band**
```
--color-bg-dark:     #0F1423   /* hero + "how it works", now adjacent, no white gap between them */
--color-bg-dark-alt: #141A2E   /* slightly lighter dark, for the second of two adjacent dark sections so they don't read as one flat block */
--color-bg-light:    #F7F8FA   /* only introduced *after* the dark opening, once */
--color-accent:      #3B82F6   /* unchanged */
```
*Rationale:* Doesn't change what "light" means — instead removes the specific complaint (a plain-white section sandwiched between two dark ones) by merging the hero and "how it works" into one elongated dark opening, using a second, very slightly lighter dark tone to keep them visually distinct. Matches Vanta's actual alternating-band structure (light/dark/light/dark, not light-dark-light-dark-light with awkward single-white-gaps).

**Option 4 — Targeted fix: only the two flagged wrapper sections change, rest of site stays white**
```
--color-bg-subtle: #F4F6F9   /* new token, blue-gray, used only for: (a) the section immediately after the hero, and (b) the final-CTA wrapper */
--color-bg-dark:   #0F1423   /* unchanged; final CTA card becomes full-bleed on --color-bg-dark directly instead of floating on white/subtle */
--color-border:    #E5E7EB   /* unchanged elsewhere */
--color-accent:    #3B82F6   /* unchanged */
```
*Rationale:* Smallest possible change — leaves the rest of the light system untouched (lower risk to the rest of the page, which the PO didn't flag as a problem) and directly addresses both named complaints: the post-hero section gets a tint instead of stark white, and the final CTA wrapper stops being a light section wrapping a dark card (i.e., the CTA section itself goes full-bleed dark, no white frame around it at all).

### Recommendation

**Option 4, informed by Option 1's hue choice:** don't re-tint the whole site (Option 2 risks fighting the cool-toned hero; Option 3 is a bigger structural change than the PO's complaint calls for). Instead, introduce one new subtle blue-gray token (`--color-bg-subtle: #F6F8FB`, same family as Option 1) used specifically for the section directly after the hero, and make the final CTA section itself full-bleed `--color-bg-dark` — removing the white wrapper entirely rather than trying to make the wrapper's white feel less "weird." This fixes both named complaints with a two-token change, stays inside the near-monochrome-plus-one-accent constraint (no new hue introduced — `#F6F8FB` is a lightened version of the existing `#0F1423` hue), and doesn't touch any section the product owner didn't flag.
