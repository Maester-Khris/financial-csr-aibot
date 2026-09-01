from fastapi import FastAPI

from app.routes import health

app = FastAPI(title="Fintech Ledger + Document Intelligence")

app.include_router(health.router)
