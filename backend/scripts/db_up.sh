#!/usr/bin/env bash
set -euo pipefail

CONTAINER_NAME="fintech-ledger-db"
PG_PASSWORD="localdev"
PG_PORT="5432"

if ! docker inspect "$CONTAINER_NAME" >/dev/null 2>&1; then
  echo "Creating container $CONTAINER_NAME..."
  docker run -d --name "$CONTAINER_NAME" \
    -e POSTGRES_PASSWORD="$PG_PASSWORD" \
    -p "$PG_PORT:5432" \
    postgres:16
elif [ "$(docker inspect -f '{{.State.Running}}' "$CONTAINER_NAME")" != "true" ]; then
  echo "Starting existing container $CONTAINER_NAME..."
  docker start "$CONTAINER_NAME" >/dev/null
else
  echo "Container $CONTAINER_NAME already running."
fi

echo "Waiting for Postgres to accept connections..."
ready=false
for _ in $(seq 1 30); do
  if docker exec "$CONTAINER_NAME" pg_isready -U postgres >/dev/null 2>&1; then
    ready=true
    break
  fi
  sleep 1
done
if [ "$ready" != "true" ]; then
  echo "Postgres did not become ready in time" >&2
  exit 1
fi

for db in ledger_dev ledger_test; do
  exists=$(docker exec "$CONTAINER_NAME" psql -U postgres -tAc "SELECT 1 FROM pg_database WHERE datname='${db}'")
  if [ "$exists" != "1" ]; then
    echo "Creating database ${db}..."
    docker exec "$CONTAINER_NAME" psql -U postgres -c "CREATE DATABASE ${db}"
  else
    echo "Database ${db} already exists."
  fi
done

echo "Postgres and both databases are ready. (Migrations are wired in a later step.)"
