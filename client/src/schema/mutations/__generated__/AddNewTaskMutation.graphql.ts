/**
 * @generated SignedSource<<8619e8fd6d3d5325e20dd9a82d66b9de>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Mutation } from 'relay-runtime';
export type CreateTaskInput = {
  clientMutationId?: string | null;
  task: TaskInput;
};
export type TaskInput = {
  rowId?: number | null;
  task: string;
  completed: boolean;
  dateCreated?: any | null;
  dateUpdated?: any | null;
};
export type AddNewTaskMutation$variables = {
  input: CreateTaskInput;
};
export type AddNewTaskMutation$data = {
  readonly createTask: {
    readonly clientMutationId: string | null;
  } | null;
};
export type AddNewTaskMutation = {
  variables: AddNewTaskMutation$variables;
  response: AddNewTaskMutation$data;
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
    "concreteType": "CreateTaskPayload",
    "kind": "LinkedField",
    "name": "createTask",
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
    "name": "AddNewTaskMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "AddNewTaskMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "65f3e9f6f294d5f78b763bdee444be66",
    "id": null,
    "metadata": {},
    "name": "AddNewTaskMutation",
    "operationKind": "mutation",
    "text": "mutation AddNewTaskMutation(\n  $input: CreateTaskInput!\n) {\n  createTask(input: $input) {\n    clientMutationId\n  }\n}\n"
  }
};
})();

(node as any).hash = "752d31d1121d84c9ee677d40fd6aef8d";

export default node;
