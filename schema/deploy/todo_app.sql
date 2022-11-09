-- Deploy todo:todo_app to pg

BEGIN;

-- XXX Add DDLs here.
CREATE SCHEMA if not exists todo_app;

COMMIT;
