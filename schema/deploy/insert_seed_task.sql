-- Deploy todo_app:insert_seed_task to pg
-- requires: tasks
-- requires: todo_appschema

BEGIN;

INSERT INTO
    todo_app.tasks (task, completed)
VALUES
    ('Buy milk', false),
    ('Buy eggs', false),
    ('Buy bread', true),
    ('Buy coffee', false),
    ('Buy tea', true),
    ('Buy chocolate', false);

COMMIT;
