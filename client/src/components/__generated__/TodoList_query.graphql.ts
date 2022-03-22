/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";

import { FragmentRefs } from "relay-runtime";
export type TodoList_query = {
    readonly allTodos: {
        readonly edges: ReadonlyArray<{
            readonly node: {
                readonly id: string;
                readonly " $fragmentRefs": FragmentRefs<"TodoListItem_todo">;
            } | null;
        }>;
    } | null;
    readonly " $refType": "TodoList_query";
};
export type TodoList_query$data = TodoList_query;
export type TodoList_query$key = {
    readonly " $data"?: TodoList_query$data | undefined;
    readonly " $fragmentRefs": FragmentRefs<"TodoList_query">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "TodoList_query",
  "selections": [
    {
      "alias": null,
      "args": null,
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
                {
                  "alias": null,
                  "args": null,
                  "kind": "ScalarField",
                  "name": "id",
                  "storageKey": null
                },
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
      "storageKey": null
    }
  ],
  "type": "Query",
  "abstractKey": null
};
(node as any).hash = '626c0be5955bdca77618b31684c45a25';
export default node;
