import { relayEnvironment } from '../../lib';
import { commitMutation } from 'react-relay';
import { graphql } from 'babel-plugin-relay/macro';
const { ConnectionHandler } = require('relay-runtime');

const mutation = graphql`
  mutation DeleteTaskMutation($input: DeleteTaskByRowIdInput!) {
    deleteTaskByRowId(input: $input) {
      clientMutationId
    }
  }
`;

export default (rowId: number, taskId: string, callback: Function) => {
  const variables = { input: { rowId } };

  commitMutation(relayEnvironment, {
    mutation,
    variables,
    onCompleted: () => {
      callback();
    },
    onError: () => {
      return console.log('AddNewTaskMutation failed');
    },
    updater(store) {
      const tasks = ConnectionHandler.getConnection(
        store.getRoot(),
        'TodoList_allTasks'
      );
      ConnectionHandler.deleteNode(tasks, taskId);
    },
  });
};
