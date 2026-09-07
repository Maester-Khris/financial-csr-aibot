import pytest
from sqlalchemy import text

from app import config
from app.ledger.db import make_session_factory


@pytest.fixture()
def db_session():
    session_factory = make_session_factory(config.TEST_DATABASE_URL)
    session = session_factory()
    try:
        yield session
    finally:
        session.rollback()
        session.execute(text("TRUNCATE TABLE entries, postings, accounts"))
        session.commit()
        session.close()
