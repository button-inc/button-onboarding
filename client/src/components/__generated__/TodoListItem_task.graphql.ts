/**
 * @generated SignedSource<<1269e941c86c784d891ae4bccca61e78>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type TodoListItem_task$data = {
  readonly __id: string;
  readonly rowId: number;
  readonly completed: boolean;
  readonly task: string;
  readonly " $fragmentType": "TodoListItem_task";
};
export type TodoListItem_task$key = {
  readonly " $data"?: TodoListItem_task$data;
  readonly " $fragmentSpreads": FragmentRefs<"TodoListItem_task">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "TodoListItem_task",
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
  "type": "Task",
  "abstractKey": null
};

(node as any).hash = "a8a8098d74e36fa670b8b4562b7fdb8f";

export default node;
