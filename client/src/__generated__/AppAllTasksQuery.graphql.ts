/**
 * @generated SignedSource<<8cb3374f1eed07077e275e2d60cbda5c>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type AppAllTasksQuery$variables = {};
export type AppAllTasksQuery$data = {
  readonly " $fragmentSpreads": FragmentRefs<"TodoList_tasks">;
};
export type AppAllTasksQuery = {
  response: AppAllTasksQuery$data;
  variables: AppAllTasksQuery$variables;
};

const node: ConcreteRequest = {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "AppAllTasksQuery",
    "selections": [
      {
        "args": null,
        "kind": "FragmentSpread",
        "name": "TodoList_tasks"
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "AppAllTasksQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "TodoCreateTablesConnection",
        "kind": "LinkedField",
        "name": "allTodoCreateTables",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "TodoCreateTable",
            "kind": "LinkedField",
            "name": "nodes",
            "plural": true,
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
                "name": "task",
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
    ]
  },
  "params": {
    "cacheID": "0267261865f333aab7f5f544ad526412",
    "id": null,
    "metadata": {},
    "name": "AppAllTasksQuery",
    "operationKind": "query",
    "text": "query AppAllTasksQuery {\n  ...TodoList_tasks\n}\n\nfragment TodoList_tasks on Query {\n  allTodoCreateTables {\n    nodes {\n      completed\n      task\n      id\n    }\n  }\n}\n"
  }
};

(node as any).hash = "6e2a131a24f636f580d3fbb4802e2753";

export default node;
