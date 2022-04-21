/**
 * @generated SignedSource<<6a7059c0a9029dc058c48a6dcd2c7ffa>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Mutation } from 'relay-runtime';
export type UpdateTaskInput = {
  clientMutationId?: string | null;
  id: string;
  taskPatch: TaskPatch;
};
export type TaskPatch = {
  completed?: boolean | null;
  dateCreated?: any | null;
  dateUpdated?: any | null;
  rowId?: number | null;
  task?: string | null;
};
export type TaskCompletedMutation$variables = {
  input: UpdateTaskInput;
};
export type TaskCompletedMutation$data = {
  readonly updateTask: {
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
    "name": "updateTask",
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
    "cacheID": "5729ff6829244fbcc69a27d3520644a8",
    "id": null,
    "metadata": {},
    "name": "TaskCompletedMutation",
    "operationKind": "mutation",
    "text": "mutation TaskCompletedMutation(\n  $input: UpdateTaskInput!\n) {\n  updateTask(input: $input) {\n    task {\n      id\n      completed\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "b54bf144f1bb3c00bde5a459fa21fb05";

export default node;
