-- Revert todo_proj:pgcrypto_extend from pg

BEGIN;

DROP EXTENSION IF EXISTS "pgcrypto";

COMMIT;
