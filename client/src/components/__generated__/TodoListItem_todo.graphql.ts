/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";

import { FragmentRefs } from "relay-runtime";
export type TodoListItem_todo = {
    readonly id: string;
    readonly task: string;
    readonly completed: boolean;
    readonly " $refType": "TodoListItem_todo";
};
export type TodoListItem_todo$data = TodoListItem_todo;
export type TodoListItem_todo$key = {
    readonly " $data"?: TodoListItem_todo$data | undefined;
    readonly " $fragmentRefs": FragmentRefs<"TodoListItem_todo">;
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
  "type": "Todo",
  "abstractKey": null
};
(node as any).hash = '649142436e96597e1d111012c4994da6';
export default node;
