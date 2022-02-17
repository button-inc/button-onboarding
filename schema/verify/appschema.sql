-- Verify todo_app:appschema on pg

BEGIN;

DO $$
BEGIN
    ASSERT (SELECT has_schema_privilege('todo_app', 'usage'));
END $$;

ROLLBACK;
