-- Revert todo_app:todo_create_table from pg

BEGIN;

  DROP TABLE todo_app.todo_create_table; 

COMMIT;
