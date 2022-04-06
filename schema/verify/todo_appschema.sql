-- Verify todo_app:todo_appschema on pg

BEGIN;

DO $$
BEGIN
    ASSERT(SELECT pg_catalog.has_schema_privilege('todo_app', 'usage'));
END $$;


ROLLBACK;
