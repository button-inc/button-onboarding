-- Verify todo_proj:add_default_users on pg

BEGIN;

SELECT COUNT(*) from todo_schema.users WHERE email in ('patrick@button.is');

ROLLBACK;
