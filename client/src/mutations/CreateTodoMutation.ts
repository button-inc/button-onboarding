import { Environment, commitMutation } from "react-relay/hooks"
import graphql from 'babel-plugin-relay/macro';

// The mutation declares variables which are passed from the client to the server when the mutation is dispatched. 
// The ! after the type indicates that it is required, not optional.

// The mutation selects a mutation field defined by the GraphQL schema ( createTodo )
// Each mutation field that the server defines corresponds to some action that the client can request of the server
const mutation = graphql`
    mutation CreateTodoMutation(
        $input: CreateTodoInput!
        ) {
        createTodo(
            input: $input
        ) {
            todo {
                task
                id
                completed
            }
        }
    }
`

export const commitCreateTodoMutation = (
    environment: Environment, 
    task: String) => {
    commitMutation(environment, {
        mutation,
        variables: {
            input: {
                todo: {
                    task,
                    completed: false,
                }
            },
        },
    });
}

