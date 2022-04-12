-- Deploy todo_app:insert_seed_task to pg
-- requires: tasks
-- requires: todo_appschema

begin;

insert into
    todo_app.tasks (task, completed)
values
    ('Buy milk', false),
    ('Buy eggs', false),
    ('Buy bread', true),
    ('Buy coffee', false),
    ('Buy tea', true),
    ('Buy chocolate', false);

commit;
