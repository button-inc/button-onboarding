-- Revert todo:appschema from pg

BEGIN;

DROP SCHEMA todo;

COMMIT;
