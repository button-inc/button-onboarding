-- Verify todo_app:todos on pg

begin;

select id, task, completed, date_created, date_updated
  from todo.todos
  where false;

rollback;
