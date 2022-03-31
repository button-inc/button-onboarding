-- Verify db:todo_app on pg

BEGIN;

SELECT pg_catalog.has_schema_privilege('todo_app', 'usage');

ROLLBACK;
