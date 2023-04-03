-- Deploy todo_proj:add_mock_data to pg
-- requires: insert_user
-- requires: insert_todo
DO $$
DECLARE
  v_user_id UUID;
BEGIN
-- add a new user
    PERFORM todo_schema.insert_user('patrick@button.is', 'password');
-- authticate
    SELECT user_uid INTO v_user_id FROM todo_schema.users WHERE email = 'patrick@button.is' AND password = crypt('password', password);

    PERFORM todo_schema.insert_todo(v_user_id, 'walk the dog', false, '2023-01-01 09:00:00', '2023-01-01 09:00:00');
    PERFORM todo_schema.insert_todo(v_user_id, 'wash disches', true,  '2023-01-01 08:00:00', '2023-01-01 09:00:00');
    PERFORM todo_schema.insert_todo(v_user_id, 'gardening',    false, '2023-01-01 08:00:00', '2023-01-01 08:00:00');

END $$;

COMMIT;
