-- Revert todo_app:todos from pg

BEGIN;

drop table todo.todos;

COMMIT;
