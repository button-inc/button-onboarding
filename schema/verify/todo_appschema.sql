-- Verify todo_app:todo_appschema on pg

begin;

do $$
begin
    assert(select pg_catalog.has_schema_privilege('todo_app', 'usage'));
end $$;


rollback;
