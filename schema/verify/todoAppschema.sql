-- Verify todo_app:todoAppschema on pg

BEGIN;

  select pg_catalog.has_schema_privilege('todo_app', 'usage');

ROLLBACK;
