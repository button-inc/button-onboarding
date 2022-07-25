-- Deploy todo_app:tasks to pg
-- requires: todo_app

BEGIN;

CREATE TABLE todo_app.tasks (
    id Serial PRIMARY KEY,
    task TEXT NOT NULL,
    completed BOOLEAN NOT NULL,
    date_created TIMESTAMP NOT NULL DEFAULT NOW(),
    date_updated TIMESTAMP NOT NULL DEFAULT NOW()
);

COMMIT;
