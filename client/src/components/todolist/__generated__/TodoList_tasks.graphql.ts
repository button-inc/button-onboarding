/**
 * @generated SignedSource<<d659e0c9b6ecaf5e1e594f4a197fcd35>>
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
      readonly dateCreated: any;
      readonly dateUpdated: any;
      readonly id: string;
      readonly rowId: number;
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
              "name": "id",
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
              "name": "dateCreated",
              "storageKey": null
            },
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "dateUpdated",
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

(node as any).hash = "5d3e4e092a63c23a90c26879490d0217";

export default node;
