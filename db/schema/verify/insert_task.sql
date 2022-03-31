-- Verify db:insert_task on pg

BEGIN;

SELECT id, task, completed, date_created, date_updated
  FROM todo_app.tasks;

ROLLBACK;
