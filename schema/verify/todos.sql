-- Verify todo_proj:todos on pg

BEGIN;

SELECT task, completed, date_created, date_updated, task_uid, user_uid
  FROM todo_schema.todos
 WHERE FALSE;

ROLLBACK;
