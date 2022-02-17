-- Deploy todo_app:tasks to pg
-- requires: appschema

BEGIN;

CREATE TABLE tasks (
    id  bigint unique,
    task varchar(50),
    completed bool,
    date_created date default current_date,
    date_updated date
);

COMMIT;
