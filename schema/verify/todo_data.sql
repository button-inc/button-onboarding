-- Verify todo:todo_data on pg

BEGIN;

-- XXX Add verifications here.
select id, task, completed, date_created, date_updated from todo_data where false;

ROLLBACK;
