-- Verify todo_proj:add_mock_data on pg

DO $$
DECLARE
  v_user_id UUID;

BEGIN

    SELECT user_uid INTO v_user_id FROM todo_schema.users WHERE email = 'patrick@button.is' AND password = crypt('password', password);
    PERFORM COUNT(*) FROM todo_schema.todos where user_uid = v_user_id;

ROLLBACK;

END $$;

