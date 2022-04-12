-- Revert todo_app:insert_seed_task from pg

begin;

truncate table todo_app.tasks ;

commit;
