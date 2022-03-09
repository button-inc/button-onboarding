-- Verify todo_app:todo_appschema on pg

begin;

select pg_catalog.has_schema_privilege('todo', 'usage');

rollback;
