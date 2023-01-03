-- Deploy todo:todos to pg
-- requires: appschema

BEGIN;

SET client_min_messages = 'warning';

CREATE TABLE todo.todos (
	id serial PRIMARY KEY,
	task VARCHAR (50) NOT NULL,
	completed BOOLEAN NOT NULL, 
	date_created TIMESTAMP NOT NULL DEFAULT NOW(), 
	date_updated TIMESTAMP NOT NULL DEFAULT NOW()
); 

COMMIT;
