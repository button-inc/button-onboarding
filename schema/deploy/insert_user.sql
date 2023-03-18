-- Deploy todo_proj:insert_user to pg
-- requires: users
-- requires: todo_app
-- requires: pgcrypto_extend

BEGIN;

CREATE OR REPLACE FUNCTION todo_schema.insert_user(
  email TEXT,
  password TEXT
) RETURNS UUID AS $$
  INSERT INTO todo_schema.users (email, password)
  VALUES (email, crypt(password, gen_salt('bf')))
  RETURNING user_uid;
$$ LANGUAGE sql;

COMMIT;
