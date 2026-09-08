# Fintech Ledger + Document Intelligence

A double-entry ledger core (idempotent postings, balance-invariant
enforcement, compensating reversals) paired with a document-intelligence
chat feature (OCR ingestion, retrieval-augmented Q&A with citations, and
agentic tool-calls back into the ledger).

Full scope and phased execution plan: [artifacts/product-backlog.md](artifacts/product-backlog.md).
See [`CHANGELOG.md`](./CHANGELOG.md) for what's shipped so far, sprint by sprint.

**Status:** ledger DB core (Epic 1.1 schema/migrations + Epic 1.2 balance
invariant enforcement) implemented, database side only — see
[docs/superpowers/specs/2026-09-06-ledger-db-schema-design.md](docs/superpowers/specs/2026-09-06-ledger-db-schema-design.md).
No REST API, concurrency stress test, or deployment yet.

## Stack

| Layer | Choice |
|---|---|
| Backend | Python 3.11+ / FastAPI |
| Frontend | React (Vite) |
| DB | PostgreSQL + pgvector (not wired up yet) |

## Running the backend

```bash
cd backend
python3 -m venv .venv
.venv/bin/pip install -r requirements.txt
.venv/bin/uvicorn app.main:app --reload
```

Health check: `GET http://127.0.0.1:8000/health`

## Local development — ledger DB core

Prerequisites: Docker running locally.

1. `./backend/scripts/db_up.sh` — idempotent: creates (or starts) a single
   Postgres 16 container named `fintech-ledger-db`, creates the `ledger_dev`
   and `ledger_test` databases if they don't already exist, and runs Alembic
   migrations against both. Safe to re-run any time — it only creates what's
   missing.
2. Copy `backend/.env.example` to `backend/.env` if you need to override the
   default connection settings (defaults work out of the box against the
   container from step 1).
3. Run the test suite: `cd backend && pytest`

**Isolation level:** the balance-invariant trigger relies only on
`READ COMMITTED` (Postgres's default) — there is no read-then-conditional-write
step in this part of the system, so no stricter isolation level is set
anywhere.

## Running the frontend

```bash
cd frontend
npm install
npm run dev
```

Opens at `http://127.0.0.1:5173`.
