# Ledger Schema Research — Validating Epic 1.1 Against Industry Practice

Date: 2026-09-06
Scope: before implementing `product-backlog.md` Epic 1.1 (schema & migrations),
validate the planned `accounts` / `postings` / `entries` design against real,
current fintech ledger implementations — not assumption. Web research only,
no code changed.

## Sources checked

- [Modern Treasury — How to Scale a Ledger, Part V: Immutability and Double-Entry](https://www.moderntreasury.com/journal/how-to-scale-a-ledger-part-v)
- [Modern Treasury — Ledger Transaction object docs](https://docs.moderntreasury.com/platform/reference/ledger-transaction-object)
- [TigerBeetle — Debit/Credit: The Schema for OLTP](https://docs.tigerbeetle.com/concepts/debit-credit/)
- [freeCodeCamp — Build a Bank Ledger in Go with PostgreSQL](https://www.freecodecamp.org/news/build-a-bank-ledger-in-go-with-postgresql-using-the-double-entry-accounting-principle/)
- [Fintechly — Ledger System Design: Principles for Accuracy, Auditability, and Scale](https://fintechly.com/infrastructure/infrastructure-ledger-system-design/)
- [System Design Sandbox — Design an Internal Ledger](https://www.systemdesignsandbox.com/learn/design-internal-ledger)
- [Lobsters discussion — Ledger Implementation in PostgreSQL](https://lobste.rs/s/9sxdp3/ledger_implementation_postgresql)
- General search synthesis on minor-units vs decimal monetary storage

## What's actually consistent across every source (high confidence)

**1. Three-table shape: accounts → header → lines.** Every real implementation
found (Modern Treasury, Fintechly's synthesis, System Design Sandbox,
freeCodeCamp) uses the same three-part structure our backlog already plans:
an `accounts` table, an immutable transaction/journal *header* row, and one
*line* row per debit or credit leg referencing that header. Naming varies
(Modern Treasury: Accounts/Transactions/Entries; Fintechly:
accounts/journal_entries/postings; ours: accounts/postings/entries) but the
structure — one header, ≥2 lines, lines reference accounts — is identical.
**Our planned `postings` (header) + `entries` (lines) naming is a real,
recognized pattern, not an invented one.**

**2. Append-only, no update path, ever.** Every source treats the line/entry
table as immutable — no UPDATE, no DELETE, corrections are new rows, never
mutation. Matches Epic 1.1's explicit "no `updated_at`, no update path at
all" on `postings`.

**3. Integer minor units for amounts, never floating point.** Unanimous.
"Amounts are integer minor units (e.g. cents); no floating-point arithmetic
anywhere on the money path" appears verbatim in the general search synthesis;
TigerBeetle uses unsigned integer `amount`; the System Design Sandbox schema
uses "signed integer in minor units." The one outlier (freeCodeCamp's
tutorial) uses `NUMERIC(19,4)` decimal instead — a legitimate second option,
but integer minor units is the dominant real-world default and what our
backlog already specifies. **No change needed.**

**4. Idempotency key lives on the header, unique-constrained.** Fintechly's
schema has a unique index on `(source_system, external_id)` on the journal
header specifically for this; System Design Sandbox keeps a parallel
`idempotency_records` table for request-hash tracking. Our plan's
`idempotency_key UNIQUE` on `postings` matches the simpler (Fintechly-style)
version of this pattern directly.

**5. No stored/mutable balance column on `accounts`.** This one is worth
flagging explicitly because it's easy to assume otherwise: **every source
that addresses it agrees balances are derived, not stored as a live counter.**
Fintechly: "Derived from postings table by summing direction-labeled amounts,
not stored as a mutable counter." System Design Sandbox: balance snapshots
are explicitly labeled "derived, not authoritative... rebuilt from immutable
ledger lines if corruption is discovered." freeCodeCamp's tutorial is the
one exception, keeping a denormalized `balance` column — but even there it's
commented as "denormalized cache, not source of truth." **Epic 1.1's
`accounts` table (id, name, currency, created_at — no balance column) is
already correct here; don't add one.**

**6. The balance invariant is checked per-currency, at the header level, in
one atomic transaction.** "Sum(debits) = Sum(credits) per entry" / "per
currency" is the consistent phrasing (Modern Treasury, Fintechly, System
Design Sandbox all state it this way). One general search result
independently corroborates the backlog's specific mechanism choice: *"The
reliable approach to enforce balanced journal entries in PostgreSQL is using
a constraint trigger declared deferrable and initially deferred, which lets
an application insert a header and all its line rows in one transaction and
only checks the balance once, right before commit."* That's exactly Epic
1.2's planned `CREATE CONSTRAINT TRIGGER ... INITIALLY DEFERRED` — not
something to build today (that's Epic 1.2, not 1.1), but it confirms the
schema Epic 1.1 is laying down (a header row plus FK'd line rows in the same
transaction) is shaped correctly to support that enforcement mechanism later.

## Where real implementations genuinely disagree (worth knowing, not blocking)

**Direction enum + unsigned amount vs. a single signed amount, no direction
column.** This is the one real fork in the road:
- **Direction enum** (debit|credit column, amount always positive) — Modern
  Treasury's public docs use this, Fintechly's synthesized schema uses this,
  and it's what the backlog already specifies (`direction (enum: debit|credit)`).
- **Signed amount** (negative = debit, positive = credit, no direction
  column) — System Design Sandbox's schema uses this; TigerBeetle sidesteps
  the question entirely by using two account-ID fields per transfer instead
  of one row per leg.

Both are real, defensible, production-used patterns. Direction-enum is
slightly more explicit and harder to misuse (a sign-flip bug is a classic
ledger mistake; an enum can't silently flip), at the cost of one extra
column and an invariant check that's "sum(debit-direction amounts) =
sum(credit-direction amounts)" instead of the simpler "sum(amount) = 0."
**Recommendation: keep the backlog's existing direction-enum choice** — it
matches Modern Treasury's own public convention specifically, and the extra
explicitness is worth the one column for something as failure-sensitive as
a balance invariant.

**TigerBeetle's "one row per transfer, two account-ID fields" shape is a
different paradigm entirely** (a purpose-built ledger database, not a
schema pattern for a general-purpose relational DB) — not applicable here
since the stack is Postgres/SQLAlchemy, not TigerBeetle itself. Noted for
completeness, not a candidate.

## Bottom line for Epic 1.1

**The backlog's planned schema is already validated against real,
current industry practice — no changes needed before implementing it.**
Specifically confirmed: the three-table shape, the append-only/no-update
design, integer minor units, the unique idempotency key placement, the
absence of a stored balance column, and the direction-enum choice for
debit/credit. The one open fork (direction-enum vs. signed-amount) has a
real answer either way; the backlog's existing choice is the more common
and more explicit of the two, not an arbitrary pick.
