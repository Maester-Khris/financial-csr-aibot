from sqlalchemy import text

from app import config
from app.ledger.db import make_session_factory


def test_session_connects_to_test_database():
    session_factory = make_session_factory(config.TEST_DATABASE_URL)
    session = session_factory()
    try:
        result = session.execute(text("SELECT 1")).scalar_one()
        assert result == 1
    finally:
        session.close()
