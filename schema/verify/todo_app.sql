-- Verify todo_app:todo_app on pg

BEGIN;

SELECT 1/COUNT(*)
FROM information_schema.schemata
WHERE schema_name = 'todo_app';


ROLLBACK;
