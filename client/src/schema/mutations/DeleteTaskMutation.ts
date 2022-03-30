import { relayEnvironment } from '../../lib';
import { commitMutation } from 'react-relay';
import { graphql } from 'babel-plugin-relay/macro';

const mutation = graphql`
  mutation DeleteTaskMutation($input: DeleteTaskByRowIdInput!) {
    deleteTaskByRowId(input: $input) {
      clientMutationId
      deletedTaskId
    }
  }
`;

export default (rowId: number, callback: Function) => {
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
  });
};
