-- Revert todo_app:todo_app from pg

BEGIN;

DROP SCHEMA todo_app;

COMMIT;
