-- Deploy todo_proj:users to pg
-- requires: todo_app
-- requires: uuid_extend

BEGIN;

CREATE TABLE todo_schema.users (
    user_uid uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
    email text UNIQUE NOT NULL,
    password text NOT NULL
);

COMMIT;
