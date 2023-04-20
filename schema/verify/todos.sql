-- Verify todo:todos on pg

BEGIN;

SELECT id, task, completed, date_created, date_updated
	FROM todo.todos
WHERE FALSE;

ROLLBACK;
