--- Revert todo:todos from pg

begin;

drop table todo.todos;

commit;