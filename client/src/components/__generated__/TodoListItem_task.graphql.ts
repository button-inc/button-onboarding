/**
 * @generated SignedSource<<3032b523e457a7cee68c9b204782f8af>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type TodoListItem_task$data = {
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
    }
  ],
  "type": "Task",
  "abstractKey": null
};

(node as any).hash = "3bbc172f6ca914ef332bebc9dccfc1ec";

export default node;
