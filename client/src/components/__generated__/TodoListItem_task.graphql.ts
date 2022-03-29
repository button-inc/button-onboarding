/**
 * @generated SignedSource<<f91f810c231a44c5f8128483579ff97e>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type TodoListItem_task$data = {
  readonly completed: boolean;
  readonly task: string;
  readonly dateCreated: any;
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
      "name": "dateCreated",
      "storageKey": null
    }
  ],
  "type": "Task",
  "abstractKey": null
};

(node as any).hash = "6429bfd1e2901ada5468f40bdb738ee7";

export default node;
