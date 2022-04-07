-- Deploy todo_app:tasks to pg
-- requires: todo_appschema

BEGIN;

CREATE TABLE todo_app.tasks (
  id            SERIAL PRIMARY KEY,
  task          TEXT NOT NULL,
  completed     BOOLEAN NOT NULL DEFAULT FALSE,
  date_created  TIMESTAMP NOT NULL DEFAULT NOW(),
  date_updated  TIMESTAMP NOT NULL DEFAULT NOW()
);

COMMIT;
