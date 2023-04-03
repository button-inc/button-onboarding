-- Verify todo_proj:todo_app on pg

BEGIN;

SELECT 1/COUNT(*) FROM information_schema.schemata WHERE schema_name = 'todo_schema';
SELECT has_schema_privilege('todo_schema', 'usage');

ROLLBACK;
