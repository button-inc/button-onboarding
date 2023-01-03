/**
 * @generated SignedSource<<44150ad46539cce95ced1e4454393a79>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type TodoList_query$data = {
  readonly allTodos: {
    readonly nodes: ReadonlyArray<{
      readonly id: string;
      readonly " $fragmentSpreads": FragmentRefs<"TodoListItem_todo">;
    } | null>;
  } | null;
  readonly " $fragmentType": "TodoList_query";
};
export type TodoList_query$key = {
  readonly " $data"?: TodoList_query$data;
  readonly " $fragmentSpreads": FragmentRefs<"TodoList_query">;
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
          "concreteType": "Todo",
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
  "type": "Query",
  "abstractKey": null
};

(node as any).hash = "1084217787dad1be6fded35be24e8cf4";

export default node;
