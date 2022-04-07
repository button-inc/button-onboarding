-- Revert todo_app:tasks from pg

BEGIN;

DROP TABLE IF EXISTS todo_app.tasks;

COMMIT;
