-- Verify todo_proj:users on pg

BEGIN;

SELECT email, password
  FROM todo_schema.users
 WHERE FALSE;

ROLLBACK;
