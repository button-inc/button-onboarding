import { Environment, commitMutation } from "react-relay/hooks"
import graphql from 'babel-plugin-relay/macro';


const mutation = graphql`
    mutation CreateTodoMutation($input: CreateTodoInput!) {
        createTodo(input: $input) {
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

