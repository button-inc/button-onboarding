/**
 * @generated SignedSource<<25edfdbafde84849c1c6055e5fda02e5>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Mutation } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type DeleteTodoByRowIdInput = {
  clientMutationId?: string | null;
  rowId: number;
};
export type DeleteTodoMutation$variables = {
  input: DeleteTodoByRowIdInput;
};
export type DeleteTodoMutation$data = {
  readonly deleteTodoByRowId: {
    readonly todo: {
      readonly " $fragmentSpreads": FragmentRefs<"TodoListItem_todo">;
    } | null;
  } | null;
};
export type DeleteTodoMutation = {
  response: DeleteTodoMutation$data;
  variables: DeleteTodoMutation$variables;
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
    "kind": "Variable",
    "name": "input",
    "variableName": "input"
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "DeleteTodoMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "DeleteTodoPayload",
        "kind": "LinkedField",
        "name": "deleteTodoByRowId",
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
                "args": null,
                "kind": "FragmentSpread",
                "name": "TodoListItem_todo"
              }
            ],
            "storageKey": null
          }
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
    "name": "DeleteTodoMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "DeleteTodoPayload",
        "kind": "LinkedField",
        "name": "deleteTodoByRowId",
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
                "name": "rowId",
                "storageKey": null
              },
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
                "name": "completed",
                "storageKey": null
              },
              {
                "kind": "ClientExtension",
                "selections": [
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "__id",
                    "storageKey": null
                  }
                ]
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
    ]
  },
  "params": {
    "cacheID": "9af82639b237d1e20e3acd53fad630aa",
    "id": null,
    "metadata": {},
    "name": "DeleteTodoMutation",
    "operationKind": "mutation",
    "text": "mutation DeleteTodoMutation(\n  $input: DeleteTodoByRowIdInput!\n) {\n  deleteTodoByRowId(input: $input) {\n    todo {\n      ...TodoListItem_todo\n      id\n    }\n  }\n}\n\nfragment TodoListItem_todo on Todo {\n  rowId\n  task\n  completed\n}\n"
  }
};
})();

(node as any).hash = "298f9ebd26dc52c4de65f7af10355b86";

export default node;
