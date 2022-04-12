-- Verify todo_app:insert_seed_task on pg

begin;

select id, task, completed, date_created, date_updated from todo_app.tasks;

rollback;
