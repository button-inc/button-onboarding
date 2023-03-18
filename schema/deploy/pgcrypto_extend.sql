-- Deploy todo_proj:pgcrypto_extend to pg

BEGIN;

CREATE EXTENSION IF NOT EXISTS "pgcrypto";

COMMIT;
