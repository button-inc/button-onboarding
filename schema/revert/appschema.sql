-- Revert onboarding:appschema from pg

BEGIN;

DROP SCHEMA todo;

COMMIT;
