-- Deploy db:insert_task to pg
-- requires: tasks
-- requires: todo_app

BEGIN;

INSERT INTO 
    todo_app.tasks (task, completed, date_created, date_updated)
VALUES
    ('Clone project', TRUE, NOW(), NOW()),
    ('Create database', TRUE, NOW(), NOW()),
    ('Initialize sqitch schema', TRUE, NOW(), NOW()),
    ('Create dummy data', TRUE, NOW(), NOW()),
    ('Create Postgraphile API', FALSE, NOW(), NOW()),
    ('Create front end', FALSE, NOW(), NOW());

COMMIT;
