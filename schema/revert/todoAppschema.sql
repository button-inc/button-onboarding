-- Revert todo_app:todoAppschema from pg

BEGIN;

  DROP SCHEMA todo_app;

COMMIT;
