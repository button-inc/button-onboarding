-- Verify todo_proj:insert_user on pg

BEGIN;

SELECT has_function_privilege('todo_schema.insert_user(text, text)', 'execute');

ROLLBACK;
