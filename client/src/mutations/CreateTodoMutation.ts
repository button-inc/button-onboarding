import { Environment, commitMutation } from "react-relay/hooks"
import graphql from 'babel-plugin-relay/macro';
import { RecordSourceSelectorProxy } from "relay-runtime";

// CreateTodoInput type comes from the schema.graphql
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

export const commitCreateTodoMutation = (environment: Environment, task: String) => {
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
        updater: (store: RecordSourceSelectorProxy) => {
            console.log(store);

        }
    });
}



