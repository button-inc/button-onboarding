-- Deploy todo_proj:add_default_users to pg
-- requires: insert_user
-- requires: pgcrypto_extend

BEGIN;

SELECT todo_schema.insert_user('patrick@button.is', 'password');

COMMIT;
