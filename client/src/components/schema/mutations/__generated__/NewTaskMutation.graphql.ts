/**
 * @generated SignedSource<<82c36331c279cd645211937c443e42a9>>
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
  completed?: boolean | null;
  dateCreated?: any | null;
  dateUpdated?: any | null;
  rowId?: number | null;
  task: string;
};
export type NewTaskMutation$variables = {
  connections: ReadonlyArray<string>;
  input: CreateTaskInput;
};
export type NewTaskMutation$data = {
  readonly createTask: {
    readonly taskEdge: {
      readonly node: {
        readonly id: string;
        readonly task: string;
      } | null;
    } | null;
  } | null;
};
export type NewTaskMutation = {
  variables: NewTaskMutation$variables;
  response: NewTaskMutation$data;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "connections"
  },
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
],
v2 = {
  "alias": null,
  "args": null,
  "concreteType": "TasksEdge",
  "kind": "LinkedField",
  "name": "taskEdge",
  "plural": false,
  "selections": [
    {
      "alias": null,
      "args": null,
      "concreteType": "Task",
      "kind": "LinkedField",
      "name": "node",
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
          "name": "task",
          "storageKey": null
        }
      ],
      "storageKey": null
    }
  ],
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "NewTaskMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "CreateTaskPayload",
        "kind": "LinkedField",
        "name": "createTask",
        "plural": false,
        "selections": [
          (v2/*: any*/)
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
    "name": "NewTaskMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "CreateTaskPayload",
        "kind": "LinkedField",
        "name": "createTask",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          {
            "alias": null,
            "args": null,
            "filters": null,
            "handle": "appendEdge",
            "key": "",
            "kind": "LinkedHandle",
            "name": "taskEdge",
            "handleArgs": [
              {
                "kind": "Variable",
                "name": "connections",
                "variableName": "connections"
              }
            ]
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "dfba42aaf927dd11397716b724810751",
    "id": null,
    "metadata": {},
    "name": "NewTaskMutation",
    "operationKind": "mutation",
    "text": "mutation NewTaskMutation(\n  $input: CreateTaskInput!\n) {\n  createTask(input: $input) {\n    taskEdge {\n      node {\n        id\n        task\n      }\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "15e14784c55bf3babb7c6808a391ffe7";

export default node;
