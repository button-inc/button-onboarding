-- Verify onboard:seed_todo on pg

BEGIN;

SELECT id, task, completed, date_created, date_updated
    FROM todo_app.todos;

ROLLBACK;
