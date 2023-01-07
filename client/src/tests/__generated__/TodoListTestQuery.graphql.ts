/**
 * @generated SignedSource<<b2cd6865800e8488fee8bac33981f65d>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type TodoListTestQuery$variables = {};
export type TodoListTestQuery$data = {
  readonly query: {
    readonly " $fragmentSpreads": FragmentRefs<"TodoList_query">;
  };
};
export type TodoListTestQuery = {
  response: TodoListTestQuery$data;
  variables: TodoListTestQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "kind": "Literal",
    "name": "first",
    "value": 10
  }
],
v1 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v2 = {
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
v3 = {
  "enumValues": null,
  "nullable": true,
  "plural": false,
  "type": "Cursor"
},
v4 = {
  "enumValues": null,
  "nullable": false,
  "plural": false,
  "type": "String"
},
v5 = {
  "enumValues": null,
  "nullable": false,
  "plural": false,
  "type": "Boolean"
},
v6 = {
  "enumValues": null,
  "nullable": false,
  "plural": false,
  "type": "ID"
};
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "TodoListTestQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "Query",
        "kind": "LinkedField",
        "name": "query",
        "plural": false,
        "selections": [
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "TodoList_query"
          }
        ],
        "storageKey": null
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "TodoListTestQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "Query",
        "kind": "LinkedField",
        "name": "query",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": (v0/*: any*/),
            "concreteType": "TodosConnection",
            "kind": "LinkedField",
            "name": "allTodos",
            "plural": false,
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": "TodosEdge",
                "kind": "LinkedField",
                "name": "edges",
                "plural": true,
                "selections": [
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "Todo",
                    "kind": "LinkedField",
                    "name": "node",
                    "plural": false,
                    "selections": [
                      (v1/*: any*/),
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
                      (v2/*: any*/),
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "__typename",
                        "storageKey": null
                      }
                    ],
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "cursor",
                    "storageKey": null
                  }
                ],
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "concreteType": "PageInfo",
                "kind": "LinkedField",
                "name": "pageInfo",
                "plural": false,
                "selections": [
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "endCursor",
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "hasNextPage",
                    "storageKey": null
                  }
                ],
                "storageKey": null
              },
              (v2/*: any*/)
            ],
            "storageKey": "allTodos(first:10)"
          },
          {
            "alias": null,
            "args": (v0/*: any*/),
            "filters": null,
            "handle": "connection",
            "key": "connection_allTodos",
            "kind": "LinkedHandle",
            "name": "allTodos"
          },
          (v1/*: any*/)
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "e35c19a28f9ab0f2b94a77a1ceab83ef",
    "id": null,
    "metadata": {
      "relayTestingSelectionTypeInfo": {
        "query": {
          "enumValues": null,
          "nullable": false,
          "plural": false,
          "type": "Query"
        },
        "query.allTodos": {
          "enumValues": null,
          "nullable": true,
          "plural": false,
          "type": "TodosConnection"
        },
        "query.allTodos.edges": {
          "enumValues": null,
          "nullable": false,
          "plural": true,
          "type": "TodosEdge"
        },
        "query.allTodos.edges.cursor": (v3/*: any*/),
        "query.allTodos.edges.node": {
          "enumValues": null,
          "nullable": true,
          "plural": false,
          "type": "Todo"
        },
        "query.allTodos.edges.node.__typename": (v4/*: any*/),
        "query.allTodos.edges.node.completed": (v5/*: any*/),
        "query.allTodos.edges.node.id": (v6/*: any*/),
        "query.allTodos.edges.node.rowId": {
          "enumValues": null,
          "nullable": false,
          "plural": false,
          "type": "Int"
        },
        "query.allTodos.edges.node.task": (v4/*: any*/),
        "query.allTodos.pageInfo": {
          "enumValues": null,
          "nullable": false,
          "plural": false,
          "type": "PageInfo"
        },
        "query.allTodos.pageInfo.endCursor": (v3/*: any*/),
        "query.allTodos.pageInfo.hasNextPage": (v5/*: any*/),
        "query.id": (v6/*: any*/)
      }
    },
    "name": "TodoListTestQuery",
    "operationKind": "query",
    "text": "query TodoListTestQuery {\n  query {\n    ...TodoList_query\n    id\n  }\n}\n\nfragment TodoListItem_todo on Todo {\n  rowId\n  task\n  completed\n}\n\nfragment TodoList_query on Query {\n  allTodos(first: 10) {\n    edges {\n      node {\n        id\n        ...TodoListItem_todo\n        __typename\n      }\n      cursor\n    }\n    pageInfo {\n      endCursor\n      hasNextPage\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "d06def2a55bf613fcead07dcd6c3c6c4";

export default node;
