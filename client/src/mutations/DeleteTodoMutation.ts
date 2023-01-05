import { Environment, commitMutation } from "react-relay/hooks"
import graphql from 'babel-plugin-relay/macro';

const mutation = graphql`
    mutation DeleteTodoMutation($input: DeleteTodoByRowIdInput!){
        deleteTodoByRowId(input: $input) {
            todo{
                ...TodoListItem_todo
            }            
        }
    }
`;

export const commitDeleteTodoMutation = (
    environment: Environment, 
    rowId: number,
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
    });
}
