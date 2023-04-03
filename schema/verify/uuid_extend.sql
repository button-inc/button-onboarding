-- Verify todo_proj:uuid_extend on pg

BEGIN;

SELECT 1/count(*) FROM pg_extension WHERE extname = 'uuid-ossp';

ROLLBACK;
