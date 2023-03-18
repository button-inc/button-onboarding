-- Revert todo_proj:users from pg

BEGIN;

DROP TABLE todo_schema.users;

COMMIT;
