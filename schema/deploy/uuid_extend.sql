-- Deploy todo_proj:uuid_extend to pg

BEGIN;

CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

COMMIT;
