-- Verify todo:appschema on pg

BEGIN;

DO $$
BEGIN

	ASSERT(SELECT pg_catalog.has_schema_privilege('todo', 'usage'));
END $$;

ROLLBACK;
