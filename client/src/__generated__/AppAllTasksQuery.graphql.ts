/**
 * @generated SignedSource<<158e155da2bfea1eb15bfc992129c115>>
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
  readonly " $fragmentSpreads": FragmentRefs<"TaskList_tasks">;
};
export type AppAllTasksQuery = {
  variables: AppAllTasksQuery$variables;
  response: AppAllTasksQuery$data;
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
        "name": "TaskList_tasks"
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
        "concreteType": "TasksConnection",
        "kind": "LinkedField",
        "name": "allTasks",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "Task",
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
                "name": "task",
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
    ]
  },
  "params": {
    "cacheID": "13d7c38ae4ed26f033abd9628f21b8f0",
    "id": null,
    "metadata": {},
    "name": "AppAllTasksQuery",
    "operationKind": "query",
    "text": "query AppAllTasksQuery {\n  ...TaskList_tasks\n}\n\nfragment TaskListItem_task on Task {\n  id\n  task\n  completed\n}\n\nfragment TaskList_tasks on Query {\n  allTasks {\n    nodes {\n      id\n      ...TaskListItem_task\n    }\n  }\n}\n"
  }
};

(node as any).hash = "2c8de16ad8c4319c41858a96df5f2976";

export default node;
