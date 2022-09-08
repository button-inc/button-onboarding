-- Revert onboard:appschema from pg

BEGIN;

DROP SCHEMA todo_app;

COMMIT;
