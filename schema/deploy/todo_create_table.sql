-- Deploy todo_app:todo_create_table to pg
-- requires: todoAppschema

BEGIN;
  CREATE TABLE todo_app.todo_create_table (
    id integer primary key generated always as identity,
    task varchar(255),
    completed boolean not null default false,
    date_created timestamptz not null default now(),
    date_updated timestamptz not null default now()
  );
COMMIT;
