import { relayEnvironment } from '../../lib';
import { commitMutation } from 'react-relay';
import { graphql } from 'babel-plugin-relay/macro';

const mutation = graphql`
  mutation AddNewTaskMutation($input: CreateTaskInput!) {
    createTask(input: $input) {
      clientMutationId
    }
  }
`;

export default (task: String, callback: Function) => {
  const variables = { input: { task: { task } } };

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
