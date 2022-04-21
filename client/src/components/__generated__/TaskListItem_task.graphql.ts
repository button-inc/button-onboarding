/**
 * @generated SignedSource<<0736eb74a9e35ff54354d52d92c6c2bb>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type TaskListItem_task$data = {
  readonly id: string;
  readonly rowId: number;
  readonly task: string;
  readonly completed: boolean;
  readonly " $fragmentType": "TaskListItem_task";
};
export type TaskListItem_task$key = {
  readonly " $data"?: TaskListItem_task$data;
  readonly " $fragmentSpreads": FragmentRefs<"TaskListItem_task">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "TaskListItem_task",
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
    }
  ],
  "type": "Task",
  "abstractKey": null
};

(node as any).hash = "9afae3791093b7c8da7197c50cdb8abe";

export default node;
