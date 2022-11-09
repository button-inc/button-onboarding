-- Deploy todo:todo_data to pg
-- requires: todo_app

BEGIN;

-- XXX Add DDLs here.
create table if not exists todo_data (
    id serial primary key,
    task text not null,
    completed boolean not null default false,
    date_created timestamp not null default now(),
    date_updated timestamp not null default now()
);

COMMIT;
