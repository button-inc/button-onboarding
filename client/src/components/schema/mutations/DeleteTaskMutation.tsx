import { commitMutation, Environment } from "react-relay";
import { graphql } from "babel-plugin-relay/macro";
import RelayEnvironment from "../../../RelayEnvironment";
import { DeleteTaskMutation } from "./__generated__/DeleteTaskMutation.graphql";

const mutation = graphql`
  mutation DeleteTaskMutation($connections: [ID!]!, $input: DeleteTaskByRowIdInput!) {
    deleteTaskByRowId(input: $input) {
      # https://mrtnzlml.com/docs/relay/directives#deleteedge
      deletedTaskId @deleteEdge(connections: $connections)
    }
  }
`;

const commit = (rowId: number, connectionId: string) => {
  const variables = { connections: [connectionId], input: { rowId } };

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
