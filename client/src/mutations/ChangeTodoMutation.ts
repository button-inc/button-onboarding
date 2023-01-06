
import { Environment, commitMutation } from "react-relay/hooks"
import graphql from 'babel-plugin-relay/macro';


const mutation = graphql`
    mutation ChangeTodoMutation (
    $input: UpdateTodoInput!) {
    updateTodo(input: $input) {
        todoEdge {
            node {
                completed
                id
            }
        }
    }
}`;

export const commitChangeTodoMutation = (
    environment: Environment, 
    id: String, 
    isComplete: boolean, 
    callback: Function) => {
  
  commitMutation(environment, {
    mutation,
    variables: {
        input: {
            id: id,
            todoPatch: {
                completed: isComplete
            }
        },
    },
    onCompleted: () => {
      callback();
    },
    onError: () => {},
  });
};
