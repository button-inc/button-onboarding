-- Revert todo_proj:todo_app from pg

BEGIN;

DROP SCHEMA todo_schema;

COMMIT;
