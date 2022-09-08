-- Deploy onboard:seed_todo to pg
-- requires: todos
-- requires: appschema

BEGIN;

INSERT INTO todo_app.todos (id, task, completed) 
    values 
        ('1', 'Make a list', true),
        ('2', 'Check it twice', false),
        ('3', 'Buy coal', false),
        ('4', 'Buy carrots', true);

COMMIT;
