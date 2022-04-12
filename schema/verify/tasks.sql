-- Verify todo_app:tasks on pg

begin;

select id, task, completed, date_created, date_updated from todo_app.tasks where false;

rollback;
