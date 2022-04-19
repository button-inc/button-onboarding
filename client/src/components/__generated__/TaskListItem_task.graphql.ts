/**
 * @generated SignedSource<<5febe42500c0135cc6a28a85aba3ddd1>>
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

(node as any).hash = "9880d90fca89e6794e4a9bf5f87fa9ce";

export default node;
