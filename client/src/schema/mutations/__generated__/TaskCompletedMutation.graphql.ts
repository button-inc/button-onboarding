/**
 * @generated SignedSource<<40e3c3265e5a920d31b06a1f595d588a>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Mutation } from 'relay-runtime';
export type UpdateTaskByRowIdInput = {
  clientMutationId?: string | null;
  taskPatch: TaskPatch;
  rowId: number;
};
export type TaskPatch = {
  rowId?: number | null;
  task?: string | null;
  completed?: boolean | null;
  dateCreated?: any | null;
  dateUpdated?: any | null;
};
export type TaskCompletedMutation$variables = {
  input: UpdateTaskByRowIdInput;
};
export type TaskCompletedMutation$data = {
  readonly updateTaskByRowId: {
    readonly taskEdge: {
      readonly node: {
        readonly completed: boolean;
        readonly id: string;
      } | null;
    } | null;
  } | null;
};
export type TaskCompletedMutation = {
  variables: TaskCompletedMutation$variables;
  response: TaskCompletedMutation$data;
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
    "concreteType": "UpdateTaskPayload",
    "kind": "LinkedField",
    "name": "updateTaskByRowId",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "TasksEdge",
        "kind": "LinkedField",
        "name": "taskEdge",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "Task",
            "kind": "LinkedField",
            "name": "node",
            "plural": false,
            "selections": [
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "completed",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "id",
                "storageKey": null
              }
            ],
            "storageKey": null
          }
        ],
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
    "name": "TaskCompletedMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "TaskCompletedMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "aeacfd850875983feb07f9d1ccededf7",
    "id": null,
    "metadata": {},
    "name": "TaskCompletedMutation",
    "operationKind": "mutation",
    "text": "mutation TaskCompletedMutation(\n  $input: UpdateTaskByRowIdInput!\n) {\n  updateTaskByRowId(input: $input) {\n    taskEdge {\n      node {\n        completed\n        id\n      }\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "b6955f40b85a2bd33b000a3058b2eb86";

export default node;
