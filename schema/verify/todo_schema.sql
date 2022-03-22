-- Verify todo:todo_schema on pg

begin;

select pg_catalog.has_schema_privilege('todo', 'usage');

rollback;
