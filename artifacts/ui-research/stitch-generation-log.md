# Stitch Generation Log — Stage 3

Date: 2026-09-03
Session: connected to the user's existing, already-logged-in Chrome via
`playwright-cli attach --cdp=chrome` (channel-name attach — the browser has
no TCP debug port open, so `--cdp=http://localhost:9222`-style URL attach
does not work in this environment; `attach --cdp=chrome` connects directly
to the running, already-authenticated browser process and reused the tab
already open at `https://stitch.withgoogle.com/u/1/?pli=1`, per the
coordinator's clarification). No fresh login was performed — session is
authenticated as the user's own Google account ("Joël Mbeh").

Each screen: prompt submitted verbatim on round 1 (mode toggled to "Web"),
screenshot/export reviewed against the prompt's own VISUAL SYSTEM / LAYOUT /
EXCLUSIONS sections, refined up to 2 more times (3 rounds max) if it misses.

Export method: Stitch's "Exporter" panel only offers code-target exports
(AI Studio, Figma, MCP, Netlify, Lovable, Bolt) — no plain PNG download —
and the "Preview → New Tab" live-preview link 404'd. Full-resolution capture
was instead done by locating the generated screen's iframe inside Stitch's
react-flow canvas, programmatically panning that node to the canvas origin
(bypassing pan/zoom drift), hiding the editor's floating `react-flow__panel`
chrome overlays (toolbar, journal panel), and taking a clipped
`page.screenshot` at the design's native pixel size (e.g. 1280x2676) via
`playwright-cli run-code`. Reused for all 5 screens below.

---

## 1. Landing

**Rounds used: 1 (good match, accepted).**

Project auto-generated a design-token system plus the landing screen from
one submission of the verbatim prompt (mode: Web). Stitch also
autonomously kept proposing/building *additional* unrequested screens
("How it works", "Security & Compliance", a "step-by-step interactive
demo") after the landing screen finished — these were ignored; only the
screen matching the prompt's own brief ("Ask your documents. Get a cited
answer. Post it to the ledger." hero) was reviewed and exported.

Self-critique against the prompt's VISUAL SYSTEM/LAYOUT/EXCLUSIONS:
- Near-monochrome base + dark hero (#0F1423-ish) — matches.
- Single blue accent on primary CTA ("See it in action") and user message
  pill — matches. Minor gap: the three feature-icon squares and the
  "VERIFIED FINANCIAL INTELLIGENCE" eyebrow label render in a slightly
  indigo/violet-tinted blue rather than a strictly neutral-with-blue-only
  palette — a small deviation from "no other decorative color anywhere,"
  though still clearly in the blue family, not a second brand color.
- Mono type used correctly for all numeric/technical values (confidence
  "99.8%", dollar amounts, hash string, timestamps).
- Nav is exactly "Product / How it works / Security / Docs" + one CTA, no
  login/signup — matches.
- Hero centerpiece is the required chat-exchange mockup: user question in
  a blue pill, assistant reply with a bordered citation card (doc name,
  page/coordinate, confidence badge in mono) — and additionally a
  distinct "proposed balanced ledger entry" tool-result card with a
  "[Confirm & Post Entry]" button, echoing the confirm-before-post pattern
  called out in the brief.
- Three feature sections cover exactly the three required themes (cited
  answers, explicit human confirmation, double-entry/balance guarantees).
- Footer is minimal (logo + one copyright line) — matches.
- No pricing table, no testimonials/logo wall, no dashboard screenshot,
  no multi-currency messaging — all correctly absent.

Verdict: **good match**. Accepted round 1; the indigo-tinted icon/label
color is noted as a minor, non-blocking gap.

Saved to `artifacts/ui-research/stitch/landing.png` (1280x2676, native
resolution export, editor chrome removed).

## 2. Dashboard

**Rounds used: 1 (good match, accepted).**

Single submission of the verbatim prompt (mode: Web) produced one screen
("Ledger Assistant - Home Dashboard"), generated in full on round 1 with
no unrequested extra screens this time.

Self-critique against VISUAL SYSTEM/LAYOUT/EXCLUSIONS:
- Persistent dark sidebar with Dashboard/Chat/Documents/Ledger, active
  item blue-highlighted, plus a "Quick Search ⌘K" hint — matches exactly.
- Only saturated colors present: blue accent (active nav, "Ask Assistant"
  button, links), green ("HEALTH", "PASSING EVAL", "PARSED OK", "VERIFIED
  VALID"), amber ("REQUIRES ATTENTION" pill, flagged-row left border), red
  ("Confidence 62%", "$0.80 mismatch") — matches the three-status-color
  rule with no stray decorative color.
- All numeric/tabular values in a monospace face, right-aligned where
  tabular (amounts, timestamps, vector counts, percentages, checksum) —
  matches.
- All four required stat tiles present with specific, non-round numbers
  (1,428 docs / +14 today / 11,840 vector chunks; 3.2% drop-rate / -0.8%
  vs baseline; 94.6% eval score / 189/200 pass) — matches the "never look
  rounded or vague" instruction closely.
- "Needs Attention" widget: 3 realistic flagged rows with amber left
  border, document name, reason, mono timestamp, not empty — matches.
- "Recent Activity" widget present as "Recent Ledger Postings & AI
  Queries" — dense, right-aligned mono amounts, description/source
  columns — matches in substance (column labels differ slightly from the
  prompt's literal "description/amount/timestamp/status" but cover the
  same information).
- "Corpus" widget present as "Corpus & Telemetry" — total ingested count
  (842 files) and last-ingestion timestamp, plus bonus related telemetry
  (RAG latency, citation coverage, ingestion throughput chart) — all tied
  to real backlog-relevant data, not vanity metrics, so within the
  "no decorative charts unrelated to real data" rule.
- No account-creation/ledger-management affordance, no settings/admin
  panel — correctly absent.

Verdict: **good match**. Accepted round 1, no notable gaps.

Saved to `artifacts/ui-research/stitch/dashboard.png` (1280x1261, native
resolution export, editor chrome removed).

## 3. Chat with citations

**Rounds used: 2 (good match after one refinement, accepted).**

Round 1: first submission (project "Ledger Assistant Core Interface")
stalled for roughly 15 minutes with the design-token panel built but no
screen ever generated (no error surfaced, generation simply never
progressed past "Generating the design system"). Treated as a failed
round; abandoned rather than waiting indefinitely, and the prompt was
resubmitted as a fresh project ("Ledger Assistant Chat Interface"), which
generated normally in under a minute.

Round 1 (resubmit) self-critique: the generated screen rendered at mobile
width (390px) with a bottom icon bar (Dashboard/Chat/Documents/Ledger)
rather than the desktop web width with a persistent left sidebar that the
prompt's own LAYOUT section calls the primary layout ("Persistent left
sidebar as in the dashboard... Main pane is a dedicated full-height chat
surface"). Content quality was otherwise excellent and already matched
nearly every other requirement (bordered citation card with doc/page/
confidence in mono; a visually distinct "receipt"-style tool-result card
with DR/CR breakdown and a separate, unclicked "Post to ledger" button;
an explicit "I couldn't find that in your documents" turn with no
citation card and no fabricated answer; bordered/unfilled suggested-prompt
chips; blue user pills; a consistent sparkle glyph marking assistant
turns). Verdict: miss on primary LAYOUT/viewport only.

Round 2: sent a targeted follow-up in the same chat thread asking for the
same screen at ~1280px desktop width with the persistent left sidebar
matching the Dashboard screen, explicitly noting the mobile version
already generated is a valid responsive variant, not the primary
deliverable. Stitch generated a second (desktop) frame within the same
project while keeping the mobile one. The desktop result carries over
every strength from round 1 content-wise and adds the required sidebar,
top workspace bar, and command-palette-style search — a good match with
no further gaps found.

Verdict: **good match**, accepted on round 2.

Saved to `artifacts/ui-research/stitch/chat.png` (1280x1871, native
resolution export of the desktop-width frame, editor chrome removed).

## 4. Document library — BLOCKED, no accepted image

**Rounds attempted: 3 distinct submissions, all failed to produce a
screen. No `document-library.png` was produced.**

Attempt 1 (verbatim prompt, mode: Web, new project "Tax Document Ingestion
Library"): generation ran, design-token panel built, then Stitch surfaced
an explicit platform error in the UI: *"Un événement inattendu s'est
produit et Stitch n'a pas pu terminer votre génération. Veuillez réessayer
dans quelques instants."* ("An unexpected event occurred and Stitch could
not complete your generation. Please try again in a moment.") No screen
was ever generated.

Per a mid-task steer, attempt 2 genericized the content-sensitive framing
(kept every structural/visual requirement — status pills, table columns,
exception-first amber flagging, tokens — but changed "tax document" /
"tax slip" wording to "financial document", on the theory that the tax
-specific terminology might be tripping a content filter). Submitted as a
brand-new project ("Ledger Assistant Document Library"). Result: the same
explicit platform error, no screen generated.

Per a further steer, attempt 3 additionally shortened the prompt to
roughly half its original length (collapsed the VISUAL SYSTEM paragraph
to just the key hex values, cut the RESPONSIVE section to one sentence,
kept only the essential structural asks: page purpose, the 3 status
values, the exception-first amber-row pattern, the mono/Inter typographic
split, the core column set). This time the "Generate" click produced no
error message but also never created a project or started a generation at
all — the RPC calls Stitch fires on submit (`batchexecute?rpcids=...`)
returned HTTP 200, but no project ever appeared in "Mes projets" and the
UI never left the home screen, even after two separate click attempts and
a page reload to confirm. Retried once more with the same result.

**Verdict: real blocker, not a design-quality miss.** Three structurally
different prompt strategies (verbatim, content-genericized, and
content-genericized-plus-shortened) failed in two distinct ways (an
explicit "unexpected event" generation failure, and a silent no-op on
submit) on the one screen out of five whose subject matter is
document-status/ingestion for uploaded files — the only screen with no
accepted image. This does not look like a prompt-quality problem (the
same prompt authoring approach worked cleanly for the other four
screens); it looks like either an intermittent platform-side fault or a
content-sensitivity/complexity trip specific to this combination of
generation length and subject matter that this session could not work
around. Per the task's guidance to stop and report rather than keep
silently working around a hard blocker, no further retries were made
after the third distinct failure, and no image was fabricated or
substituted for this screen.

Saved artifacts for this screen: none. The three failed/abandoned
projects remain visible in the Stitch account's project list ("Tax
Document Ingestion Library", "Ledger Assistant Document Library",
"Ledger Document Ingestion Library") if a human wants to inspect Stitch's
own error state directly.

## 5. Ledger / postings view (read-only)

**Rounds used: 1 (good match, accepted).**

Single submission of the verbatim prompt (mode: Web) generated cleanly
and quickly, at the correct desktop width (1280px) on the first attempt —
no mobile-default or stall/error issues this time.

Self-critique against VISUAL SYSTEM/LAYOUT/EXCLUSIONS:
- Persistent sidebar (Dashboard, Chat, Documents, Ledger [active, blue])
  — matches.
- Page header "Postings" with a "Read-only — created via chat" badge in
  muted text, and deliberately **no** action button anywhere in the
  header — matches exactly, including the explicit absence the prompt
  called out.
- Table columns match the brief: Posting ID (mono), Description (Inter),
  Amount (mono, right-aligned currency), Created at (mono timestamp),
  plus Source (document + page, blue link) and Status (green "Balanced"
  pill) confirmed present in the underlying row data, though at this
  exact viewport width with a detail panel open the table's own wrapper
  (`overflow-x-auto`, ~651px visible vs. ~1142px table width) pushes the
  Source/Source and Status columns out of view without horizontal
  scrolling — a real, minor gap: the two rightmost columns are not
  visible in the static capture, only reachable by scrolling that
  specific panel. Everything else about the table (5 realistic rows with
  real descriptions like "Total reported employment income — T4 2024",
  right-aligned mono amounts, a "Net Ledger Invariant: 0.00 USD (All
  balanced)" footer) matches closely.
- Selecting a row opens the required detail panel: description label,
  large mono amount as the focal point, green "Balanced" pill, a
  DR/CR "Double Entry Journal Breakdown" table that nets to zero with an
  explicit "Net Zero Check ✓ $0.00 Verified" line, and a "Provenance &
  Audit Trail" section with source document, page/coordinates, chat
  session origin, tool invocation, confirmation hash, and "View source
  document" / "View in chat session" links — matches and exceeds the
  brief's detail-panel requirements. No edit controls anywhere in the
  panel.
- Color discipline: only blue (nav/links) and green (Balanced/Net Zero
  pills) appear — no amber/red anywhere on this screen, correctly
  matching the prompt's explicit exclusion of those statuses here.
- No create/edit/delete affordance, no account-management UI, no manual
  posting-entry form — all correctly absent.

Verdict: **good match**, accepted round 1. Noted gap: Source/Status
table columns require horizontal scroll to see in the row-selected state
captured here (real content, confirmed present in the DOM/data — not
missing, just off-screen in this static export).

Saved to `artifacts/ui-research/stitch/ledger-postings.png` (1280x1183,
native resolution export, editor chrome removed).

---

## Summary

| Screen | Rounds | Verdict |
|---|---|---|
| Landing | 1 | Good match |
| Dashboard | 1 | Good match |
| Chat with citations | 2 | Good match (round 1 mobile-only miss, fixed via follow-up) |
| Document library | 3 attempts, all failed | **Blocked — no image produced** |
| Ledger / postings | 1 | Good match (minor: two table columns need horizontal scroll to view) |

4 of 5 screens produced accepted images in `artifacts/ui-research/stitch/`
(`landing.png`, `dashboard.png`, `chat.png`, `ledger-postings.png`). The
document library screen is the one confirmed hard blocker — see its
section above for the full failure history before it was abandoned.

## Supervisor decision on Document library

All 4 successful screens reviewed and approved as final (landing, dashboard,
chat, ledger-postings) — cohesive visual language, correct status-color
discipline (blue accent + green/amber/red state-only), citation/confirm
patterns intact across screens.

Document library had 3 structurally distinct failed attempts (verbatim,
content-genericized, genericized+shortened), all failing at the Stitch
platform level (explicit generation error or generation never starting),
not from a fixable prompt-quality issue. Further retries would have
diminishing returns. Decision: skip further Stitch attempts for this
screen — Stage 4 builds it directly in React from the written Stage 2
prompt spec (`stitch-prompts.md` section 4), using `dashboard.png` and
`ledger-postings.png` as visual precedent since document library shares
the same dense-table/status-pill/mono-numeric pattern already established
and approved in those two screens. No loss of design consistency expected.
