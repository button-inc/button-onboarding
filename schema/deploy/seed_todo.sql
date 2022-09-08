-- Deploy onboard:seed_todo to pg
-- requires: todos
-- requires: appschema

BEGIN;

INSERT INTO todo_app.todos (task, completed) 
    values 
        ('Make a list', true),
        ('Check it twice', false),
        ('Buy coal', false),
        ('Buy carrots', true);

COMMIT;
