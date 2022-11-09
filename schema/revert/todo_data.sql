-- Revert todo:todo_data from pg

BEGIN;

-- XXX Add DDLs here.
drop table if exists todo_app.todo_data;

COMMIT;
