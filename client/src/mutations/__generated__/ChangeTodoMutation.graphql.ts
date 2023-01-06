/**
 * @generated SignedSource<<90aaa0c74a9068db95d6e61b28e76065>>
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
export type ChangeTodoMutation$variables = {
  input: UpdateTodoInput;
};
export type ChangeTodoMutation$data = {
  readonly updateTodo: {
    readonly todoEdge: {
      readonly node: {
        readonly completed: boolean;
        readonly id: string;
      } | null;
    } | null;
  } | null;
};
export type ChangeTodoMutation = {
  response: ChangeTodoMutation$data;
  variables: ChangeTodoMutation$variables;
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
    "name": "ChangeTodoMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "ChangeTodoMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "248a87ad599b45b5e2f5f391ec2e11a5",
    "id": null,
    "metadata": {},
    "name": "ChangeTodoMutation",
    "operationKind": "mutation",
    "text": "mutation ChangeTodoMutation(\n  $input: UpdateTodoInput!\n) {\n  updateTodo(input: $input) {\n    todoEdge {\n      node {\n        completed\n        id\n      }\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "9e8572311be3d3309c7f1db68563b02e";

export default node;
