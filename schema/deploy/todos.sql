-- Deploy todo:todos to pg
-- requires: todo_schema

begin;

create table todo.todos (
    id integer primary key generated always as identity,
    task text not null,
    completed boolean not null default false,
    date_created timestamptz not null default now(),
    date_updated timestamptz
);

commit;
