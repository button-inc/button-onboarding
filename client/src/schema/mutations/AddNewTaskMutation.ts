import { relayEnvironment } from '../../lib';
import { commitMutation } from 'react-relay';
import { graphql } from 'babel-plugin-relay/macro';
const { ConnectionHandler } = require('relay-runtime');

const connectionId = ConnectionHandler.getConnectionID(
  'root',
  'TodoList_allTasks'
);
const mutation = graphql`
  mutation AddNewTaskMutation($connections: [ID!]!, $input: CreateTaskInput!) {
    createTask(input: $input) {
      taskEdge @appendEdge(connections: $connections) {
        cursor
        node {
          id
          ...TodoListItem_task
        }
      }
    }
  }
`;

export default (task: String, callback: Function) => {
  const variables = {
    connections: [connectionId],
    input: { task: { task } },
  };

  commitMutation(relayEnvironment, {
    mutation,
    variables,
    onCompleted: () => {
      callback();
    },
    onError: () => {
      return console.log('AddNewTaskMutation failed');
    },
  });
};
