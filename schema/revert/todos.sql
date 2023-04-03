-- Revert todo_proj:todos from pg

BEGIN;

drop table todo_schema.todos;

COMMIT;
