-- Verify todo_app:tasks on pg

BEGIN;

SELECT 1 / COUNT(*)
FROM information_schema.tables
WHERE table_schema = 'todo_app'
  AND table_name = 'tasks';


ROLLBACK;
