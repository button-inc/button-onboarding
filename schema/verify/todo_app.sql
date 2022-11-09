-- Verify todo:todo_app on pg

BEGIN;

-- XXX Add verifications here.
SELECT pg_catalog.has_schema_privilege('todo_app', 'USAGE');

ROLLBACK;
