/**
 * @generated SignedSource<<b8de270aea04eff2d22fc4a5ef615671>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Mutation } from 'relay-runtime';
export type UpdateTodoInput = {
  clientMutationId?: string | null;
  id: string;
  todoPatch: TodoPatch;
};
export type TodoPatch = {
  completed?: boolean | null;
  dateCreated?: any | null;
  dateUpdated?: any | null;
  rowId?: number | null;
  task?: string | null;
};
export type TodoListItemUpdateMutation$variables = {
  input: UpdateTodoInput;
};
export type TodoListItemUpdateMutation$data = {
  readonly updateTodo: {
    readonly todoEdge: {
      readonly node: {
        readonly completed: boolean;
        readonly id: string;
      } | null;
    } | null;
  } | null;
};
export type TodoListItemUpdateMutation = {
  response: TodoListItemUpdateMutation$data;
  variables: TodoListItemUpdateMutation$variables;
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
    "concreteType": "UpdateTodoPayload",
    "kind": "LinkedField",
    "name": "updateTodo",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "TodosEdge",
        "kind": "LinkedField",
        "name": "todoEdge",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "Todo",
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
    "name": "TodoListItemUpdateMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "TodoListItemUpdateMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "1822d81367fa449ea328e4b8e2b9f1b7",
    "id": null,
    "metadata": {},
    "name": "TodoListItemUpdateMutation",
    "operationKind": "mutation",
    "text": "mutation TodoListItemUpdateMutation(\n  $input: UpdateTodoInput!\n) {\n  updateTodo(input: $input) {\n    todoEdge {\n      node {\n        completed\n        id\n      }\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "51559d41e28b9c678bc11bb8e133ce8f";

export default node;
