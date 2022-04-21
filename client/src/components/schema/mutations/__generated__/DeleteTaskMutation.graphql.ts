/**
 * @generated SignedSource<<99e36768dc4e11c1e57ddeb4ae837f0b>>
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
  connections: ReadonlyArray<string>;
  input: DeleteTaskByRowIdInput;
};
export type DeleteTaskMutation$data = {
  readonly deleteTaskByRowId: {
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
    "name": "connections"
  },
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "input"
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "input",
    "variableName": "input"
  }
],
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "deletedTaskId",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "DeleteTaskMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "DeleteTaskPayload",
        "kind": "LinkedField",
        "name": "deleteTaskByRowId",
        "plural": false,
        "selections": [
          (v2/*: any*/)
        ],
        "storageKey": null
      }
    ],
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "DeleteTaskMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "DeleteTaskPayload",
        "kind": "LinkedField",
        "name": "deleteTaskByRowId",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          {
            "alias": null,
            "args": null,
            "filters": null,
            "handle": "deleteEdge",
            "key": "",
            "kind": "ScalarHandle",
            "name": "deletedTaskId",
            "handleArgs": [
              {
                "kind": "Variable",
                "name": "connections",
                "variableName": "connections"
              }
            ]
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "15d2d7b0b7e8d9db00183314d0bafcfe",
    "id": null,
    "metadata": {},
    "name": "DeleteTaskMutation",
    "operationKind": "mutation",
    "text": "mutation DeleteTaskMutation(\n  $input: DeleteTaskByRowIdInput!\n) {\n  deleteTaskByRowId(input: $input) {\n    deletedTaskId\n  }\n}\n"
  }
};
})();

(node as any).hash = "790200e36896c92c5404b8540f0bded9";

export default node;
