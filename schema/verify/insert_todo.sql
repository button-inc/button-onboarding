-- Verify todo_proj:insert_todo on pg

BEGIN;

SELECT has_function_privilege('todo_schema.insert_todo(uuid, text, boolean, timestamp, timestamp)', 'execute');

ROLLBACK;
