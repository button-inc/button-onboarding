-- Verify todo_app:tasks on pg

BEGIN;

DO $$
    BEGIN
        ASSERT (SELECT has_table_privilege('todo_app.tasks', 'SELECT'));
    END $$;

ROLLBACK;
