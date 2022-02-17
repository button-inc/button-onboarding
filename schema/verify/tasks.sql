-- Verify todo_app:tasks on pg

BEGIN;

DO $$
    BEGIN
        ASSERT (SELECT has_table_privilege('tasks', 'SELECT'));
    END $$;

ROLLBACK;
