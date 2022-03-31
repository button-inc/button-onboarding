/**
 * @generated SignedSource<<f787d5f4dead1b94ce9ce18b902a0087>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Mutation } from 'relay-runtime';
export type DeleteTaskByRowIdInput = {
  clientMutationId?: string | null;
  rowId: number;
};
export type DeleteTaskMutation$variables = {
  input: DeleteTaskByRowIdInput;
};
export type DeleteTaskMutation$data = {
  readonly deleteTaskByRowId: {
    readonly clientMutationId: string | null;
  } | null;
};
export type DeleteTaskMutation = {
  variables: DeleteTaskMutation$variables;
  response: DeleteTaskMutation$data;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "input"
  }
],
v1 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "input",
        "variableName": "input"
      }
    ],
    "concreteType": "DeleteTaskPayload",
    "kind": "LinkedField",
    "name": "deleteTaskByRowId",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "clientMutationId",
        "storageKey": null
      }
    ],
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "DeleteTaskMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "DeleteTaskMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "229635163acd1c36bd18e10c13b9e35c",
    "id": null,
    "metadata": {},
    "name": "DeleteTaskMutation",
    "operationKind": "mutation",
    "text": "mutation DeleteTaskMutation(\n  $input: DeleteTaskByRowIdInput!\n) {\n  deleteTaskByRowId(input: $input) {\n    clientMutationId\n  }\n}\n"
  }
};
})();

(node as any).hash = "b2180166f39e35a8b49d84c88f580e1b";

export default node;
