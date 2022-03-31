-- Verify db:tasks on pg

BEGIN;

SELECT id, task, completed, date_created, date_updated
  FROM todo_app.tasks
 WHERE FALSE;

ROLLBACK;
