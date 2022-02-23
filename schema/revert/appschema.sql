-- Revert todo_app:appschema from pg

BEGIN;

DROP SCHEMA todo_app;

COMMIT;
