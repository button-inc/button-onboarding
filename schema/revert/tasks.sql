-- Revert todo_app:tasks from pg

BEGIN;

DROP TABLE tasks;

COMMIT;
