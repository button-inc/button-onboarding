-- Revert todo_proj:insert_todo from pg

BEGIN;

DROP FUNCTION todo_schema.insert_todo(
    uuid, 
    text,
    boolean,
    timestamp, 
    timestamp
    );

COMMIT;
