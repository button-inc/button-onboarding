-- Revert todo_app:insert_seed_task from pg

BEGIN;

TRUNCATE TABLE todo_app.tasks ;

COMMIT;
