-- Revert todo_proj:add_default_users from pg

BEGIN;

-- XXX Add DDLs here.
DELETE FROM todo_schema.users WHERE email in ('patrick@button.is');

COMMIT;
