-- Revert todo:todo_schema from pg

begin;

drop schema todo;

commit;
