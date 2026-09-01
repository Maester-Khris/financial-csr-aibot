# Fintech Ledger + Document Intelligence

A double-entry ledger core (idempotent postings, balance-invariant
enforcement, compensating reversals) paired with a document-intelligence
chat feature (OCR ingestion, retrieval-augmented Q&A with citations, and
agentic tool-calls back into the ledger).

Full scope and phased execution plan: [artifacts/product-backlog.md](artifacts/product-backlog.md).

**Status:** repo scaffolding only. No backlog features are implemented yet.

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

## Running the frontend

```bash
cd frontend
npm install
npm run dev
```

Opens at `http://127.0.0.1:5173`.
