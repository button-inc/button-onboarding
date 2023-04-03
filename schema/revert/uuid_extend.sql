-- Revert todo_proj:uuid_extend from pg

BEGIN;

DROP EXTENSION IF EXISTS "uuid-ossp";

COMMIT;
