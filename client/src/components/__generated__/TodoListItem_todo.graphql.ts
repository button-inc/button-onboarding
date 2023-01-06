/**
 * @generated SignedSource<<b7ffb28b91f9ac5616369bee1d749460>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type TodoListItem_todo$data = {
  readonly __id: string;
  readonly completed: boolean;
  readonly rowId: number;
  readonly task: string;
  readonly " $fragmentType": "TodoListItem_todo";
};
export type TodoListItem_todo$key = {
  readonly " $data"?: TodoListItem_todo$data;
  readonly " $fragmentSpreads": FragmentRefs<"TodoListItem_todo">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "TodoListItem_todo",
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
    }
  ],
  "type": "Todo",
  "abstractKey": null
};

(node as any).hash = "d73abb7462eea96324408b5fc19a8709";

export default node;
