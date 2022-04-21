/**
 * @generated SignedSource<<48a4e3f871afa062edf19b45537b2b45>>
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
    readonly deletedTaskId: string | null;
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
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "deletedTaskId",
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
    "cacheID": "f423aed728d86bdf14da3b71c7d2ba23",
    "id": null,
    "metadata": {},
    "name": "DeleteTaskMutation",
    "operationKind": "mutation",
    "text": "mutation DeleteTaskMutation(\n  $input: DeleteTaskByRowIdInput!\n) {\n  deleteTaskByRowId(input: $input) {\n    clientMutationId\n    deletedTaskId\n  }\n}\n"
  }
};
})();

(node as any).hash = "fd4b23781aec1b7bb7c283ab719a237c";

export default node;
