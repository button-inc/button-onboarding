/**
 * @generated SignedSource<<0833586a09c7ae9dafb002ef720b51a3>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
export type AppAllTasksQuery$variables = {};
export type AppAllTasksQuery$data = {
  readonly taskByRowId: {
    readonly task: string;
  } | null;
};
export type AppAllTasksQuery = {
  variables: AppAllTasksQuery$variables;
  response: AppAllTasksQuery$data;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "kind": "Literal",
    "name": "rowId",
    "value": 1
  }
],
v1 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "task",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "AppAllTasksQuery",
    "selections": [
      {
        "alias": null,
        "args": (v0/*: any*/),
        "concreteType": "Task",
        "kind": "LinkedField",
        "name": "taskByRowId",
        "plural": false,
        "selections": [
          (v1/*: any*/)
        ],
        "storageKey": "taskByRowId(rowId:1)"
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
        "args": (v0/*: any*/),
        "concreteType": "Task",
        "kind": "LinkedField",
        "name": "taskByRowId",
        "plural": false,
        "selections": [
          (v1/*: any*/),
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "id",
            "storageKey": null
          }
        ],
        "storageKey": "taskByRowId(rowId:1)"
      }
    ]
  },
  "params": {
    "cacheID": "52d1319efe53c29449f3bb76137e9de2",
    "id": null,
    "metadata": {},
    "name": "AppAllTasksQuery",
    "operationKind": "query",
    "text": "query AppAllTasksQuery {\n  taskByRowId(rowId: 1) {\n    task\n    id\n  }\n}\n"
  }
};
})();

(node as any).hash = "b31496414c0089233c5322b8f083959d";

export default node;
