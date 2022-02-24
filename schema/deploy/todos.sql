-- Deploy onboarding:todos to pg
-- requires: appschema

BEGIN;

create table todo_app.todos (
  id integer primary key generated always as identity,
  task text not null,
  completed boolean not null default false,
  date_created timestamptz not null default now(),
  date_updated timestamptz
);

COMMIT;
