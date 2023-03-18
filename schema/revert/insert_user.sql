-- Revert todo_proj:insert_user from pg

BEGIN;

DROP FUNCTION todo_schema.insert_user(text, text);

COMMIT;
