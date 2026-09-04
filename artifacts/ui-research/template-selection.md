# Template Sourcing — Stage 1

Date: 2026-09-03
Source: [aura.build/design-systems](https://www.aura.build/design-systems) (725 public DESIGN.md systems at time of browsing), accessed via the user's existing logged-in browser session over CDP (Playwright remote debugging), not a fresh login.
Grounded in: `artifacts/ui-research/competitor-ux.md` (Stage 0) — five-screen list (landing, dashboard, chat-with-citations, document library, read-only ledger/postings view) and the visual-direction takeaway: **dense tabular data + near-monochrome palette + exactly ONE restrained accent color, color reserved for state, not decoration.**

## Method

Aura's design-systems library has no fintech/enterprise category filter, so candidates were surfaced via the in-page search box across multiple query terms (`fintech`, `finance`, `banking`, `ledger`, `payments`, `spend`, `audit`, `cash flow`, `corporate`, etc.) rather than relying on the default "Popular" grid, which skews toward generic SaaS/AI/consumer themes ("Aether — Real-Time Telemetry Engine", "NeuroSync | Master Your Mind"). Each serious candidate's detail page was opened directly (not just its thumbnail) to read its actual extracted color/typography/spacing tokens and its embedded HTML-preview screenshot, since thumbnail cards alone don't reliably signal density or restraint.

## Candidates considered

| # | Name | Search hit | Accent | Verdict |
|---|---|---|---|---|
| 1 | **Compliance Platform** (`compliance-platform-5`) | `audit` | none — true black/white/gray, color used only for status pills | **Primary pick** |
| 2 | **Financial Infrastructure / "FinStack"** (`financial-infrastructure`) | `cash flow` | Blue `#3B82F6` | **Secondary pick** |
| 3 | Axiom - Payment Operations (`axiom-payment-operations-1`) | `corporate` | Purple `#A268CF` + blue `#5984EA` | Considered, not selected — purple primary reads closer to generic SaaS than restrained fintech; ties for density with #1/#2 without adding anything new |
| 4 | SaaS Finance Platform (`saas-finance-platform`) | `finance` | Lime green `#84CC16` | Rejected — excellent dense "treasury platform" stat-tile copy and dark surface, but lime-green primary is exactly the Ramp-style bold-brand outlier Stage 0 flagged as the wrong reference for this product |
| 5 | Aura Mobile Finance (`aura-mobile-finance`) | `finance` | Lime green `#A3E635` | Used as **tertiary/mobile reference only**, not adopted for color — see below |
| 6 | Aura Finance - Design Memory (`aura-finance-design-memory`) | `finance` | — | Rejected — page content is Aura's own "design system memory" feature promo, not a finance product UI; false-positive keyword match |
| 7 | Lumora Studio — Adaptive Revenue Interface | `finance` | — | Screened at listing level only; not opened — name/positioning ("Adaptive Revenue Interface") reads as generic SaaS analytics, redundant with #1/#2 once those were confirmed strong |
| 8 | Financial Dashboard Elements - Expanded & Exploding Cards | `spend` | — | Screened at listing level only, not opened — "Exploding Cards" naming signals a playful/3D interaction style, opposite of the muted-density direction |

Screenshots for every opened candidate are in `artifacts/ui-research/screenshots/`, prefixed `candidate-<slug>-<n>.png`.

## Final pick: Compliance Platform (primary) + Financial Infrastructure "FinStack" (secondary) + Aura Mobile Finance (mobile-breakpoint reference only)

### Why this combination, tied back to Stage 0

**Compliance Platform is the closest literal match to Stage 0's core visual-direction finding.** Its token table is genuinely near-monochrome — primary, accent, and background are all `#000000`; the only non-black/white/gray values in the entire system are the semantic ones used for state (a green "Verified" pill, a red "Flagged" pill) visible directly in its own preview screenshot. That preview — a dense table titled `AUDIT-712C` with columns `Directives / Evidence / State` and rows like `External Identity — Verified`, `Access Role Check — Verified`, `Q2 Assessment — Flagged` — is a near-literal stand-in for two of Stage 0's five screens at once: the **Document library** (`pending`/`needs_review`/`indexed` status column) and the **read-only ledger/postings view** (row-per-record, right-aligned metadata, status as the one colored element). Its copy ("Continuous compliance, engineered for absolute transparency… audit-ready records with complete traceability") is thematically on-the-nose for a product whose entire premise is citable, immutable ledger postings. It also carries real library signal: 742 views, 9 uses, Aura-"Featured."

Its one weakness against "enterprise-grade": card radius is `32px` — softer/more rounded than the crisp, buttoned-down geometry of Stripe/Modern Treasury. This is the reason it isn't used alone.

**Financial Infrastructure ("FinStack") supplies what Compliance Platform's dashboard-only preview doesn't cover: a landing/marketing page structure**, and a tighter geometric system. Its nav (`Start / Solutions / Features / Company / Help`, a `Create Account` CTA) and dark hero are a real fintech-company landing page, filling Stage 0 screen #1 directly. Its single blue accent (`#3B82F6`) is exactly the "pick one accent, keep everything else restrained" instruction from Stage 0 — restrained the way Mercury's indigo is restrained, not a decorative rainbow. Its radius tokens (card `8px`, control `8px`) are notably tighter than Compliance Platform's, closer to the "buttoned-down" feel of Modern Treasury/Stripe, and its body/label typeface is Geist Mono — reinforcing the monospace-for-tabular-figures convention Stage 0 called out as the serious-fintech norm (right-aligned tabular numerals, not cards).

**Combined**, these two give a near-monochrome white/black base, one blue accent for primary actions, color reserved for state pills, 8px-radius geometry, and a dense audit/ledger-table component pattern with a compatible landing-page shell — directly matching Stage 0's cross-cutting pattern list (sidebar+widget dashboard once authenticated, exception-first status surfacing, right-aligned tabular data, muted palette with one accent).

**Aura Mobile Finance is referenced for responsive/breakpoint behavior only, not for its color or theme.** It's a genuine mobile finance-app UI (balance hero, activity list with right-aligned signed amounts, bottom nav, numeric keypad transfer screen) — useful evidence for how this component vocabulary (balance card, transaction list, action buttons) should collapse into a single-column mobile layout, which is all the pipeline spec needs ("mobile coverage just needs to inform responsive breakpoint behavior, not a full separate mobile app design"). Its lime-green crypto-wallet accent (`#A3E635`) is explicitly **not** adopted — it's the same bold-brand outlier pattern as SaaS Finance Platform, and Stage 0 is clear our audience (finance-ops/document-review) sits closer to Mercury/Modern Treasury than to a consumer wallet app.

## Extracted design tokens for Stage 2

### Colors — merged system (Compliance Platform monochrome base + FinStack blue accent)

| Token | Value | Source | Usage |
|---|---|---|---|
| `background` | `#FFFFFF` (light) / `#000000` (dark) | FinStack / Compliance | Page background |
| `surface` | `#18181B` (dark mode card/panel surface) | Both agree | Cards, panels, sidebar |
| `surface (FinStack dark)` | `#0F1423` | FinStack | Alternate near-black surface for hero/dark sections |
| `primary / accent` | `#3B82F6` (blue) | FinStack | Primary buttons, links, active nav state, chat user-message pill — the one restrained accent |
| `accent-secondary` | `#0A66C2` | FinStack | Secondary interactive emphasis (hover/pressed states) |
| `text-primary` | `#111827` (light) / `#FFFFFF` (dark) | Both | Body/heading text |
| `text-secondary` | `#4B5563` (light) / `#A1A1AA` (dark) | Both | Metadata, captions, muted labels |
| `border` | `#E5E7EB` (light) / `#27272A` (dark) | Both | Dividers, table row borders, card outlines |
| `state-success` | green (Compliance Platform's "Verified" pill — exact hex not exposed in token table, use a standard `#16A34A`-class green) | Compliance | Matched/indexed/verified status |
| `state-error` | red (Compliance Platform's "Flagged" pill — use a standard `#DC2626`-class red) | Compliance | Needs-review/mismatched/failed status |

**Rule carried into Stage 2 prompts:** color appears in exactly two places — the single blue accent for primary actions/active states, and semantic green/amber/red for status. Nothing else in the UI should carry saturated color.

### Typography

| Role | Family | Size / weight | Source |
|---|---|---|---|
| Display / headings | Inter | 64px / w500 (`display-lg`) | Both systems agree |
| Body | Inter (Compliance) or Geist Mono (FinStack) | 16px / w400 | Use **Inter for prose** (chat answers, marketing copy), **Geist Mono or JetBrains Mono for anything tabular/numeric** (ledger amounts, document metadata, confidence scores, timestamps) — both source systems independently converge on a mono face for label/technical text |
| Label / metadata | JetBrains Mono (Compliance) / Geist Mono (FinStack) | 12px / w600 | Column headers, status chips, IDs |

### Spacing & density

| Token | Value | Notes |
|---|---|---|
| Base unit | 8px | Consistent across every candidate opened — treat as the grid unit |
| Gap | 16px | Default inter-element gap |
| Card padding | 24px | Interior card padding |
| Section padding | 80px | Marketing/landing page section rhythm (FinStack) — not applicable inside the dense dashboard/table screens |

### Radius

Use FinStack's tighter values as the default (closer to the "enterprise-grade" target); Compliance Platform's softer values are noted as the alternative if a warmer feel is wanted later.

| Element | FinStack (recommended default) | Compliance Platform (alternate) |
|---|---|---|
| Card | 8px | 32px |
| Control (button/input) | 8px | 24px |
| Pill (status chip, avatar) | 9999px | 9999px |

### Motion

Both systems: **moderate** level, 150–200ms durations, `ease` easing, hover transitions on text/color only (no heavy transform/scale animation) — consistent with a data-dense, low-flourish enterprise tool rather than a marketing-forward consumer product.

## Reference screenshots

All in `artifacts/ui-research/screenshots/`:
- `candidate-compliance-platform-1.png` — listing header, author/stats
- `candidate-compliance-platform-3.png` — **hero + `AUDIT-712C` dense status table (key reference for Document library / Ledger view)**
- `candidate-compliance-platform-2.png`, `-4.png` — full color/typography/spacing/radius token tables
- `candidate-compliance-platform-visualcards.png` — composition notes, tags (`dashboard, bento, charts, security, navigation, support, validation`), heading inventory
- `candidate-financial-infrastructure-1.png` — **FinStack landing nav + hero (key reference for Landing screen)**
- `candidate-financial-infrastructure-2.png`, `-3.png` — full color/typography/spacing/radius token tables
- `candidate-axiom-payment-operations.png`, `candidate-axiom-preview-1.png` to `-3.png` — Axiom candidate (not selected, kept for comparison)
- `candidate-saas-finance-1.png`, `-2.png` — SaaS Finance Platform (rejected, lime-green outlier, kept for comparison)
- `candidate-aura-mobile-finance-1.png`, `-2.png` — **mobile breakpoint reference (structure only, not color)**
- `candidate-aura-finance-memory-1.png` — false-positive candidate (Aura's own feature promo), kept for record
