-- Revert onboarding:todos from pg

BEGIN;

drop table todo_app.todos;

COMMIT;
