import { commitMutation, Environment } from "react-relay";
import { graphql } from "babel-plugin-relay/macro";
import RelayEnvironment from "../../../RelayEnvironment";
import { DeleteTaskMutation } from "./__generated__/DeleteTaskMutation.graphql";

const mutation = graphql`
  mutation DeleteTaskMutation($input: DeleteTaskByRowIdInput!) {
    deleteTaskByRowId(input: $input) {
      clientMutationId
      deletedTaskId
    }
  }
`;

const commit = (rowId: number) => {
  const variables = { input: { rowId } };

  return commitMutation(RelayEnvironment, {
    mutation,
    variables,
    onCompleted: () => {},
    onError: () => {
      return console.log("DeleteTaskMutation failed");
    },
  });
};

export default { commit };
