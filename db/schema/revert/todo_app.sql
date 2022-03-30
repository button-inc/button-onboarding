-- Revert db:todo_app from pg

BEGIN;

DROP SCHEMA todo_app;

COMMIT;
