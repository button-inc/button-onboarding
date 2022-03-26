-- Deploy db:tasks to pg
-- requires: todo_app

BEGIN;

SET client_min_messages = 'warning';

CREATE TABLE todo_app.tasks (
    id           SERIAL      PRIMARY KEY,
    task         TEXT        NOT NULL,
    completed    BOOLEAN     NOT NULL,
    date_created TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    date_updated TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

COMMIT;
