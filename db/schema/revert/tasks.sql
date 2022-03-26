-- Revert db:tasks from pg

BEGIN;

DROP TABLE todo_app.tasks;

COMMIT;
