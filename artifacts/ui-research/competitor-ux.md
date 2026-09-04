# Competitor UX Research — Stage 0

Date: 2026-09-03
Scope: `fintech-prod` (double-entry ledger core, headless/backend-only + Document
Intelligence Chat MVP — RAG chat over tax documents with cited answers and
agentic tool-calling into the ledger). Grounded in `artifacts/product-backlog.md`
and `docs/superpowers/specs/2026-09-03-ui-design-pipeline-design.md`.

Six competitors covered: **Mercury, Ramp, Brex, Modern Treasury, Wise
(Business), Stripe (Dashboard + Dashboard Assistant)**. All six are directly
relevant — four (Mercury, Ramp, Brex, Wise) are business-banking/spend
products with the dashboard-and-transactions shape our "Dashboard" and
"Ledger/Postings" screens need; Modern Treasury is the closest structural
analog to our own ledger (double-entry, API-first, audit-trail framing); and
Stripe's **Dashboard Assistant** is the single best real-world analog to our
chat-with-citations requirement — a RAG assistant, embedded in a serious
fintech product, that answers from docs/support content and takes confirmed
actions. No substitution was needed; Rho was checked and dropped — its
public "AI copilot" material is entirely about an internal Zendesk support
tool, not a user-facing product surface, so it added no visual evidence.

Screenshots referenced below were captured live via Firecrawl during this
research pass (2026-09-03) and viewed directly, not inferred from memory —
each section notes what was actually seen vs. what is textually documented
by design-gallery/blog sources.

---

## Mercury

**Sources:**
[mercury.com](https://mercury.com/) (homepage, screenshot captured),
[SaaSFrame — Mercury](https://www.saasframe.io/saas/mercury),
[925 Studios — Mercury Design Breakdown](https://www.925studios.co/blog/mercury-design-breakdown),
[UX Planet — Captivating Design of the Mercury Fintech App](https://uxplanet.org/captivating-design-of-the-mercury-fintech-app-d472bc0288bb),
[nicelydone.club — Mercury](https://nicelydone.club/apps/mercury)

**Navigation:** In-app pattern (per SaaSFrame/UX Planet coverage) is a left
sidebar with product-language sections — Checking, Payments, Cards, Capital,
Vault, Treasury — not banking jargon. Marketing-site top nav (seen directly)
is minimal: Products / Solutions / Resources / About / Pricing, with a single
primary CTA.

**Dashboard/data density:** Card-based grouping for account summaries,
clean tables for transaction history underneath — moderate density,
described consistently across sources as "dense transaction tables stay
scannable through type discipline." Balance is the primary hero number;
detail is progressive (drill-down) rather than all exposed at once.

**Color/typography:** What we actually saw on the homepage: a full-bleed,
moody photographic hero (desk overlooking misty hills), dark overlay, white
serif-leaning display type for the headline ("Radically different
banking"), and a single saturated indigo/blue CTA pill ("Open account").
This is calmer and more editorial than a typical SaaS marketing page —
confirms the gallery sources' description of Mercury's restraint (green/blue
as the only saturated accents, red/yellow reserved strictly for
errors/warnings). Reads as "a bank account designed like a considered
product," not a spreadsheet.

**AI/chat:** No AI-assistant surface found in public marketing material.

---

## Ramp

**Sources:**
[ramp.com](https://ramp.com/) (homepage, screenshot captured),
[ramp.com/intelligence](https://ramp.com/intelligence),
[Ramp — Announcing Ramp Intelligence](https://ramp.com/blog/announcing-ramp-intelligence),
[LangChain — Ramp's Tour Guide breakout-agent case study](https://www.langchain.com/breakoutagents/ramp),
[nicelydone.club — Ramp](https://nicelydone.club/apps/ramp)

**Navigation/IA:** Workflow-queue-centric rather than account-centric.
Sources describe the core UI as "inboxes" — bills, expenses, approvals,
month-close progress — occupying primary screen real estate, with analytics
demoted a level down. The framing repeated across sources: "finance
dashboards are to-do lists wearing charts."

**Dashboard/data density:** What we saw directly on the homepage is a
literal visualization of this idea: floating status cards — "ANALYZING
RECEIPT," "MATCHING…," "FETCHING RECEIPT…," "CHECKING POLICY," "ROUTED FOR
APPROVAL" — arranged around a card graphic, i.e. the marketing page dramatizes
the product's own automation pipeline as its hero visual. A footer ticker
reads live-style operational metrics ("AGENTS AT WORK TODAY," "RECEIPTS
PROCESSED: 1,280,294," "ACCOUNTING FIELDS CODED: 1,231,475," "AGENT
INTERACTIONS: 735"). This is a distinctive pattern: turning operational
throughput into the marketing proof point, not a static stat block.

**Color/typography:** Very large, bold, black grotesque display type
("Time is money. Save both."), a lime/chartreuse-yellow primary CTA against
mostly white/off-white background, black secondary buttons. Bold and
confident but not "consumer playful" — more startup-serious than Mercury's
photographic calm.

**AI/chat:** Ramp Intelligence is described (not shown in a UI screenshot we
could access) as: a **blue Ramp Intelligence icon** marks anywhere AI acted
("look for the blue icon to see when our AI is working its magic");
employees can **text an agent directly** with policy questions instead of
emailing; a compliance dashboard shows flagged issues framed as
"transparent, auditable, and adjustable." Ramp separately built a "Tour
Guide" agent (LangChain case study) that takes over cursor movement to walk
a user through a task, routed to automatically by a classifier rather than
manually invoked. No citation/source-footnote pattern documented.

---

## Brex

**Sources:**
[brex.com](https://www.brex.com/) (homepage, screenshot captured),
[Brex Assistant support page](https://www.brex.com/support/brex-assistant),
[Brex + Slack](https://www.brex.com/support/brex-and-slack)

**Navigation/dashboard:** Design-gallery sources describe an "exception-first"
philosophy — spend against budget shown by team/entity, policy exceptions
flagged, forecasts inline; "show what needs attention, hide what's on
track." Strong visual hierarchy with dark accents for a controller-persona
overview.

**What we saw directly:** the homepage hero pairs a physical black Brex
card with a phone mockup of the "Wallet" app screen — assigned limit,
"View limit policy," "Latest expenses," a list of vendor charges (Shopify,
Facebook, TikTok, HubSpot) with amounts right-aligned. Big bold black
display type, white background, one saturated orange/red accent color used
for both the CTA button and thin geometric line-art in the hero graphic.
Reads as more consumer-polished than Mercury or Modern Treasury despite
being an enterprise-complexity product — matches the gallery framing
"consumer-grade despite enterprise complexity."

**AI/chat — Brex Assistant:** Entry points are a dedicated icon in the
mobile app header, the dashboard settings menu, and Slack. In Slack,
AI-generated replies are prefixed with a **diamond glyph** to mark them as
AI output — a lightweight, reusable "this came from AI" visual convention.
Brex's own account of the feature's evolution is notable: they **first
shipped a pure chat interface**, then found real usage split into either
simple Q&A (better answered inline, not in a chat thread) or complex
requests needing richer UI components — so they **redesigned around
Google-like inline AI answers surfaced in search results**, rather than a
chat-only surface. Explicit user-facing warning: "Brex Assistant may make
mistakes... double-check any information it generates." No citation/source
display documented in public material.

---

## Modern Treasury

**Sources:**
[moderntreasury.com/products/ledgers](https://www.moderntreasury.com/products/ledgers)
(screenshot captured),
[Behind the Scenes: Designing Our New UI](https://www.moderntreasury.com/journal/behind-the-scenes-designing-our-new-ui),
[Updated Dashboard](https://www.moderntreasury.com/journal/updated-dashboard)

This is the closest structural analog to our own ledger core (double-entry,
audit-trail-first, API-driven), even though our ledger stays headless per
the backlog — worth studying for how a serious ledger product *frames*
itself when it does get a UI, since Iteration 3's tool-calling epic does
expose ledger postings back through the chat surface.

**Navigation (in-app, per their own Journal post):** Left sidebar with
top-level sections — Reconciliation, Accounts, Counterparties — plus
**Quickswitch (⌘K)**, a command-palette pattern to search/create objects
without menu-diving. "Approvals" is called out as deliberately prominent for
finance-team users.

**Dashboard layout (per Journal post, "Updated Dashboard"):** A widget
composition that maps closely onto what our own Dashboard screen needs:
- **Real-Time Balances** — consolidated across accounts/currencies, with a
  freshness timestamp.
- **Today's Tasks** — time-sensitive items needing action (e.g. ACH returns,
  unapproved payment orders) — an exception/inbox widget, same instinct as
  Ramp's "show what needs attention."
- **Metrics** — current vs. prior period, e.g. payouts/charges/transfers.
- **Recent Activity** — last N payment items with direct links.

**Data density/philosophy:** Explicitly stated design principle: "the
dashboard doesn't round down or truncate data — information is shown as
explicitly and granularly as possible." This is a strong, quotable design
value directly relevant to a ledger-adjacent product.

**What we saw directly** (marketing page, not the authenticated app): a
plain light background, top nav (not sidebar — that's app-only), a large
serif-adjacent display headline ("The Ledger for Real-time Money
Movement"), monospaced **dark navy code panel** showing a raw JSON
`ledger_entries` snippet as the hero visual instead of a UI screenshot, and
a muted forest-green wordmark. Overall tone: developer-facing, serious,
unglamorous — the product sells itself on data fidelity and code, not
lifestyle photography.

**AI/chat:** None found.

---

## Wise (Business)

**Sources:**
[SaaSFrame — Wise](https://www.saasframe.io/saas/wise),
[Page Flows — Wise](https://pageflows.com/screens/mobile/product/transferwise/)

**Navigation/dashboard:** Mobile-first, tabbed navigation; core actions
(Send, Add money, Convert, Request) surfaced as quick-action buttons rather
than buried in menus. Transaction history renders as a **card list**, not a
dense table; multiple currency balances are shown as distinct stacked
balance cards.

**Data density:** Deliberately low-to-moderate — one task per screen, large
legible balance/rate figures up front, supporting detail secondary. Fee
transparency (mid-market rate shown before asking for a transfer) is called
out as a rendered design decision, not just copy.

**Color/typography:** Strongly green-branded (bright green accent on white,
forest-green for interactive states) — Inter for functional UI, a distinct
"Wise Sans" for expressive headline moments. Copy tone is conversational
rather than corporate.

**Overall feel:** The most consumer-friendly of the six — confirms this is
the wrong reference for a serious, dense fintech-ops tool, but useful as the
counter-example: our product should sit closer to Mercury/Modern
Treasury/Stripe than to Wise's friendliness, given the audience (finance
ops / document review, not individual consumers).

**AI/chat:** None found in the sources reviewed.

---

## Stripe (Dashboard + Dashboard Assistant)

**Sources:**
[docs.stripe.com/assistant](https://docs.stripe.com/assistant) (includes an
embedded product screenshot, captured and viewed directly),
[SaaSFrame — Stripe](https://www.saasframe.io/saas/stripe),
[Stripe Sigma](https://stripe.com/sigma)

**Navigation/dashboard (general):** Dashboard-centric IA (Payments,
Customers, Analytics as primary sections). Design-gallery sources describe
a **sticky-column financial table** with async filters/presets and
exportable views, right-aligned tabular figures, inline sparklines, and
drill-downs — "leads with tables, treats charts as summaries." Color is
used purely for state (succeeded/refunded/failed), never decoratively.

**Dashboard Assistant — our strongest analog for the citations chat.**
We captured and viewed the actual embedded product screenshot from Stripe's
own docs page. What it shows:
- A **right-side drawer** (not a full page, not a floating bubble),
  titled "Assistant" with a small **sparkle icon** as its identity mark and
  a plain "×" to dismiss — a consistent, minimal way to signal "this
  surface is AI" without heavy chrome.
- **Suggested-prompt chips** ("How do I apply a coupon?", "Help me create a
  new product", "Help me create a payment link") sit above the input box —
  a discoverability pattern for a first-run/empty chat state.
- The user's own message renders as a **solid indigo/purple pill**,
  right-aligned.
- The assistant's reply mixes **free text** ("Here's the most recent
  payment I found for a customer named Jenny Rosen.") with an **inline
  structured data card** — a bordered card showing "Payment | Jenny Rosen",
  the amount in large type, a green "Succeeded" status pill, masked card
  brand/last4, and a timestamp — directly under the text, not just prose.
- A primary-color **action button** ("Refund this payment") appears
  attached to that same card — i.e. the assistant surfaces both an answer
  *and* a confirmable action as one composed unit, not a separate flow.
- Per the docs text (not visible in this specific screenshot): answers to
  documentation/support questions are generated via **RAG over Stripe's own
  docs and support articles**, and the assistant is opened either from a
  help icon or from suggested prompts embedded directly in an analytics
  page ("Understand your payments" section of Payments Analytics) — i.e.
  it's contextually surfaced next to the data it can explain, not only from
  a global nav icon.

This is architecturally close to what Iteration 3 needs: retrieval-based
answer + confirmable tool-call action + inline structured evidence, embedded
in a serious dashboard rather than a separate "chatbot" product. The one gap
versus our requirement: the captured screenshot does not show a
footnote/citation-link style source marker — Stripe's "citation" is really
"the retrieved doc gets summarized into prose," not a visible per-claim
citation chip. Our product's requirement (page/location-level citation,
because it's answering from user-uploaded tax documents rather than static
public docs) is a step beyond what Stripe visibly does, so this is a pattern
to *extend*, not copy wholesale.

---

## Cross-cutting patterns

- **Sidebar + widget-dashboard, not top-nav-only, is the norm** once you're
  inside the authenticated product (Mercury, Modern Treasury both confirmed
  via their own sources) — marketing sites use top nav, but the actual
  logged-in app uses a left sidebar with a small number of top-level
  sections plus a command-palette (⌘K) shortcut for power users.
  Top nav is for the public marketing shell only.
- **Exception-first / "show what needs attention" is a repeated instinct**
  across Ramp, Brex, and Modern Treasury's "Today's Tasks" widget — a
  documents-needing-review or postings-pending-approval surface is a
  proven, not novel, pattern for this product category.
- **Serious fintech dashboards lean dense-data + muted/near-monochrome
  palettes with exactly one saturated accent color** (Mercury: indigo:
  Modern Treasury: forest green, used sparingly; Stripe: near-monochrome
  with color reserved for state only; Ramp/Brex are the outliers, using
  bold saturated brand color — lime and orange respectively — more
  aggressively). This should directly drive our visual direction: pick one
  accent, keep everything else restrained, use color for status/state
  before decoration.
- **Right-aligned tabular numerals, not cards, for transaction/ledger data**
  is the convention among the more "serious"/enterprise products (Stripe,
  Modern Treasury); card-based transaction lists (Wise) read as more
  consumer/mobile-first. Given our audience is finance-ops-adjacent (ledger
  postings, document review), the table convention is the better fit for
  transaction-shaped data, while card-based summaries remain fine for
  top-of-dashboard KPI/status tiles.
- **AI-assistant surfaces are converging on "inline, drawer-based, and
  action-capable," not standalone full-page chatbots.** Stripe uses a
  drawer; Brex explicitly moved away from a pure-chat interface toward
  inline answers because pure chat under-served both the simple-Q&A and the
  complex-request cases; Ramp marks AI action with a small recurring icon
  rather than a distinct visual language. The recurring idea worth reusing:
  a small, consistent "this is AI" glyph (sparkle/diamond-style), paired
  with structured result cards for anything that isn't pure prose — very
  relevant to citation display, since a citation is naturally a small
  structured chip (document name + page), not prose.

---

## Recommended Screen List

Kept deliberately tight — five screens for a static-UI demo, not a sprawling
app. Each is grounded directly in a backlog epic; none add scope the backlog
doesn't already justify. Ledger accounts/postings do **not** get a
management UI (create/edit accounts, raw postings CRUD) — the backlog is
explicit that the ledger core stays headless/backend-only and is "never
demoed live." The one ledger-adjacent screen below is scoped narrowly to
what Iteration 3 Epic 2.5 actually produces: a **read-only view of postings
that the chat assistant itself created** via tool-calling, which is a
Document Intelligence Chat feature, not a ledger-management feature.

### 1. Landing / marketing page
**Draws from:** Mercury (calm, editorial hero, single restrained accent
color, trust-first framing) blended with a lighter touch of Ramp's
"dramatize the product's own automation" instinct (their floating
status-card hero) — here, translated into: a hero showing a chat bubble
with a real cited answer rather than a generic screenshot, so the landing
page's hero *is* the differentiator.
**Why:** the product needs one front door explaining "RAG chat over tax
documents with cited answers, backed by a real ledger" to a portfolio
reviewer — this is pure marketing surface, not gated by any backend.

### 2. Dashboard (home)
**Draws from:** Modern Treasury's widget dashboard almost directly —
Balances → corpus/ingestion status; Today's Tasks → documents in
`needs_review`; Metrics → golden-set eval score / confidence drop-rate;
Recent Activity → recent chat sessions or recent postings. Also Ramp/Brex's
exception-first instinct for surfacing what needs attention first.
**Why:** Epic 2.1–2.2's ingestion/confidence-filtering machinery and Epic
2.6's golden-set eval both produce real numbers (drop-rate, eval score) that
deserve a home screen instead of being buried in a README — this screen is
the demo's "proof of rigor" surface.

### 3. Chat interface (core deliverable)
**Draws from:** Stripe's Dashboard Assistant almost directly — drawer or
dedicated pane layout, suggested-prompt chips for the empty state, user
message as a solid-color pill, assistant reply as prose **plus an inline
structured citation card** (document name / page / confidence — the
citation equivalent of Stripe's payment-record card), and an action-button
pattern for the moment the assistant proposes posting a computed figure to
the ledger (mirroring Stripe's "Refund this payment" confirm button, but for
Epic 2.5's tool-call-then-confirm flow). Brex's small recurring AI glyph is
worth reusing to mark AI-authored content consistently.
**Why:** this is Epic 2.3/2.4/2.5 end to end — the actual product. Citation
display and the confirm-before-posting action are both explicit backlog
requirements ("no answer without a citation," tool-call cross-checked at
render time).

### 4. Document library (ingestion & confidence status)
**Draws from:** Stripe's dense sticky-column table conventions and Modern
Treasury's "never round or truncate" data-fidelity ethos, plus the
exception-first flagging pattern (Ramp/Brex/Modern Treasury) for anything
`needs_review`.
**Why:** Epic 2.1/2.2 produce exactly this data — per-document status
(`pending`/`needs_review`/`indexed`), confidence-filter drop-rate — and the
backlog explicitly wants this diagnosable, not hidden. A visible queue
mirroring "Today's Tasks" is the natural UI for it.

### 5. Ledger / postings view (read-only, tool-call provenance only)
**Draws from:** Modern Treasury's Ledgers product framing (right-aligned
tabular figures, audit-trail-first language, double-entry accuracy as the
headline claim) for table styling, and Stripe's inline payment-record card
(the same "Payment | Jenny Rosen | $89.95 | Succeeded" shape) as the
template for a single posting's detail — extended with the
`source_document_id` / `source_page` / `source_location` fields Epic 2.5
adds, so every row is traceable back to the document/page that produced it.
**Why:** this is the single most differentiated feature in the whole
product — a chat answer that becomes a citable, balanced ledger posting —
and the backlog invests real schema/audit work in making it happen
(`tool_invocations`, `rule_versions`, source-linked `entries`). It deserves
one screen, scoped strictly to *displaying* what the tool-call produced, not
to a general ledger-management UI (which stays explicitly out of scope).

**Explicitly not recommended as separate screens:** a login/auth flow (Icebox:
"auth" is cut); ledger account creation/management (Icebox: "any user-facing
UI beyond what's needed to show a citation and a routing decision"); a
standalone citation-source document viewer (folded into screen 3 as a
side-panel/expand state rather than a sixth screen, per the pipeline's
"fewer, higher-quality screens" instruction).
