-- Revert todo_app:todo_appschema from pg

begin;

drop schema todo;

commit;
