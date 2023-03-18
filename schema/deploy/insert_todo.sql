-- Deploy todo_proj:insert_todo to pg
-- requires: todos
-- requires: todo_app
-- requires: uuid_extend

BEGIN;

CREATE OR REPLACE FUNCTION todo_schema.insert_todo(
  p_user_uid UUID,
  p_task TEXT,
  p_completed BOOLEAN,
  p_date_created TIMESTAMP,
  p_date_updated TIMESTAMP
) RETURNS UUID AS $$
DECLARE
  v_task_uid UUID;
BEGIN
  INSERT INTO todos (user_uid, task, completed, date_created, date_updated)
  VALUES (p_user_uid, p_task, p_completed, p_date_created, p_date_updated)
  RETURNING task_uid INTO v_task_uid;
  
  RETURN v_task_uid;
END;
$$ LANGUAGE plpgsql;

COMMIT;
