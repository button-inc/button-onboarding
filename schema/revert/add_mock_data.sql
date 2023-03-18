-- Revert todo_proj:add_mock_data from pg

BEGIN;

DELETE FROM todo_schema.users WHERE email in ('patrick@button.is');

COMMIT;
