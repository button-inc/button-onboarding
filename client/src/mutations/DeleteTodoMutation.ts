import { Environment, commitMutation } from "react-relay/hooks"
import graphql from 'babel-plugin-relay/macro';

const { ConnectionHandler } = require('relay-runtime');

const mutation = graphql`
    mutation DeleteTodoMutation(
        $input: DeleteTodoByRowIdInput!
        ){
        deleteTodoByRowId(
            input: $input
        ) {
            todo{
                ...TodoListItem_todo
            }            
        }
    }
`;

export const commitDeleteTodoMutation = (
    environment: Environment, 
    rowId: number,
    todoId: String,
    callback: Function) => {
    commitMutation(environment, {
        mutation,
        variables: {
            input: {
                rowId
            },
        },
    onCompleted: () => {
        callback();
    },
    onError: () => {},
    updater(store) {
        const todos = ConnectionHandler.getConnection(
            store.getRoot(),
            'connection_allTodos'
        );
        ConnectionHandler.deleteNode(todos, todoId);
    }

    });
}
