-- Revert todo_proj:add_default_users from pg

BEGIN;

DELETE FROM todo_schema.users WHERE email in ('patrick@button.is');

COMMIT;
