-- Deploy todo_app:tasks to pg
-- requires: todo_appschema

begin;

create table todo_app.tasks (
  id            serial primary key,
  task          text not null,
  completed     boolean not null default false,
  date_created  timestamp not null default now(),
  date_updated  timestamp not null default now()
);

commit;
