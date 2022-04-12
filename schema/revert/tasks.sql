-- Revert todo_app:tasks from pg

begin;

drop table if exists todo_app.tasks;

commit;
