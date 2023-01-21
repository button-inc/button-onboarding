/**
 * @generated SignedSource<<89a4d387407d214715b908d8a2ef1403>>
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
                "name": "id",
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
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "dateCreated",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "dateUpdated",
                "storageKey": null
              },
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
    "cacheID": "afd9421dab860548bf7239ade269dc0d",
    "id": null,
    "metadata": {},
    "name": "AppAllTasksQuery",
    "operationKind": "query",
    "text": "query AppAllTasksQuery {\n  ...TodoList_tasks\n}\n\nfragment TodoList_tasks on Query {\n  allTodoCreateTables {\n    nodes {\n      id\n      completed\n      dateCreated\n      dateUpdated\n      rowId\n      task\n    }\n  }\n}\n"
  }
};

(node as any).hash = "6e2a131a24f636f580d3fbb4802e2753";

export default node;
