-- Revert todo_app:tasks from pg
-- requires: appschema

BEGIN;

DROP TABLE todo_app.tasks;

COMMIT;
