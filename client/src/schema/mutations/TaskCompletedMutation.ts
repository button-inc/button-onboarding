import { relayEnvironment } from '../../lib';
import { commitMutation } from 'react-relay';
import { graphql } from 'babel-plugin-relay/macro';

const mutation = graphql`
  mutation TaskCompletedMutation($input: UpdateTaskByRowIdInput!) {
    updateTaskByRowId(input: $input) {
      task {
        id
        completed
      }
    }
  }
`;

export default (rowId: number, completed: Boolean, callback: Function) => {
  const variables = { input: { taskPatch: { completed }, rowId } };

  commitMutation(relayEnvironment, {
    mutation,
    variables,
    onCompleted: () => {
      callback();
    },
    onError: () => {},
  });
};
