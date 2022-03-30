/**
 * @generated SignedSource<<de94e86259372a1578172e826687e2d5>>
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
    readonly task: {
      readonly id: string;
      readonly completed: boolean;
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
        "concreteType": "Task",
        "kind": "LinkedField",
        "name": "task",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "id",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "completed",
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
    "cacheID": "564a9d4c9737d8d1dfab408a04ee98bb",
    "id": null,
    "metadata": {},
    "name": "TaskCompletedMutation",
    "operationKind": "mutation",
    "text": "mutation TaskCompletedMutation(\n  $input: UpdateTaskByRowIdInput!\n) {\n  updateTaskByRowId(input: $input) {\n    task {\n      id\n      completed\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "0cc61442c7ece838b5b1db03a1be283f";

export default node;
