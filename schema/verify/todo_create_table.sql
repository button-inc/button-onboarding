-- Verify todo_app:todo_create_table on pg

BEGIN;

SELECT Pg_catalog.has_table_privilege('todo_app.todo_create_table', 'select');

ROLLBACK;
