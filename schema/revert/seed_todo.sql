-- Revert onboard:seed_todo from pg

BEGIN;

TRUNCATE TABLE todo_app.todos;

COMMIT;
