-- Deploy todo_proj:todos to pg
-- requires: todo_app
-- requires: uuid_extend
-- requires: users

BEGIN;

CREATE TABLE todo_schema.todos (
    task_uid uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
    task text NOT NULL,
    completed boolean DEFAULT false,
    date_created timestamp DEFAULT now(),
    date_updated timestamp DEFAULT now(),
    user_uid uuid REFERENCES todo_schema.users(user_uid) ON DELETE CASCADE
);

COMMIT;
