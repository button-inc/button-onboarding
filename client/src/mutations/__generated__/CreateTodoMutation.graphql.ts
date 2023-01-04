/**
 * @generated SignedSource<<f76e25b0c50bddb6f96b33dadc0f499d>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Mutation } from 'relay-runtime';
export type CreateTodoInput = {
  clientMutationId?: string | null;
  todo: TodoInput;
};
export type TodoInput = {
  completed: boolean;
  dateCreated: any;
  dateUpdated?: any | null;
  rowId?: number | null;
  task: string;
};
export type CreateTodoMutation$variables = {
  input: CreateTodoInput;
};
export type CreateTodoMutation$data = {
  readonly createTodo: {
    readonly todo: {
      readonly completed: boolean;
      readonly id: string;
      readonly task: string;
    } | null;
  } | null;
};
export type CreateTodoMutation = {
  response: CreateTodoMutation$data;
  variables: CreateTodoMutation$variables;
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
    "concreteType": "CreateTodoPayload",
    "kind": "LinkedField",
    "name": "createTodo",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "Todo",
        "kind": "LinkedField",
        "name": "todo",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "task",
            "storageKey": null
          },
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
    "name": "CreateTodoMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "CreateTodoMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "1eba810e1ce7a77eea8bba049efbbd17",
    "id": null,
    "metadata": {},
    "name": "CreateTodoMutation",
    "operationKind": "mutation",
    "text": "mutation CreateTodoMutation(\n  $input: CreateTodoInput!\n) {\n  createTodo(input: $input) {\n    todo {\n      task\n      id\n      completed\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "f9653fd2faa2dffd685a1c1ff0e4cb70";

export default node;
