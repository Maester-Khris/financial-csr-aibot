import dataclasses
import uuid

from sqlalchemy.orm import Session

from app.ledger.models import Account, Direction, Entry, Posting


@dataclasses.dataclass
class EntryInput:
    account_id: uuid.UUID
    direction: Direction
    amount: int


def create_account(session: Session, name: str, currency: str) -> Account:
    account = Account(name=name, currency=currency)
    session.add(account)
    session.commit()
    session.refresh(account)
    return account


def create_posting(
    session: Session,
    idempotency_key: str,
    description: str | None,
    entries: list[EntryInput],
) -> Posting:
    # No explicit session.begin() here: SQLAlchemy 2.0 sessions autobegin a
    # transaction on first use, and a prior call on this session (e.g. a
    # create_account commit) leaves one already open, so calling .begin()
    # again raises "A transaction is already begun on this Session." The
    # posting and every entry still land in one atomic transaction because
    # they all execute against that same (auto-begun) transaction, and the
    # deferred constraint trigger fires once, at this commit.
    posting = Posting(idempotency_key=idempotency_key, description=description)
    session.add(posting)
    session.flush()

    for entry_input in entries:
        session.add(
            Entry(
                posting_id=posting.id,
                account_id=entry_input.account_id,
                direction=entry_input.direction,
                amount=entry_input.amount,
            )
        )

    session.commit()
    session.refresh(posting)
    return posting
