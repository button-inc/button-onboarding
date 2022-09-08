-- Deploy onboard:todos to pg
-- requires: appschema

BEGIN;

SET client_min_messages = 'warning';

CREATE TABLE todo_app.todos (
    id  text    PRIMARY KEY,
    task    text    NOT NULL,
    completed   bool NOT NULL,
    date_created  timestamptz NOT NULL DEFAULT NOW(),
    date_updated  timestamptz NOT NULL DEFAULT NOW()
);

COMMIT;
