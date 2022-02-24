-- Verify onboarding:todos on pg

BEGIN;

select id, task, completed, date_created, date_updated
  from todo_app.todos
  where false;

ROLLBACK;
