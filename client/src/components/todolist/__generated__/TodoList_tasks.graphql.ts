/**
 * @generated SignedSource<<25e9c72af591938aac37ee427a6aead9>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type TodoList_tasks$data = {
  readonly allTodoCreateTables: {
    readonly nodes: ReadonlyArray<{
      readonly completed: boolean;
      readonly task: string | null;
    } | null>;
  } | null;
  readonly " $fragmentType": "TodoList_tasks";
};
export type TodoList_tasks$key = {
  readonly " $data"?: TodoList_tasks$data;
  readonly " $fragmentSpreads": FragmentRefs<"TodoList_tasks">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "TodoList_tasks",
  "selections": [
    {
      "alias": null,
      "args": null,
      "concreteType": "TodoCreateTablesConnection",
      "kind": "LinkedField",
      "name": "allTodoCreateTables",
      "plural": false,
      "selections": [
        {
          "alias": null,
          "args": null,
          "concreteType": "TodoCreateTable",
          "kind": "LinkedField",
          "name": "nodes",
          "plural": true,
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

(node as any).hash = "69bcd244d90e3739a03c6a5a21be8449";

export default node;
