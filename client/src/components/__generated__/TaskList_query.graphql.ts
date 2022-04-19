/**
 * @generated SignedSource<<30caa55eea3b709e0e850651da87ea66>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type TaskList_query$data = {
  readonly allTasks: {
    readonly edges: ReadonlyArray<{
      readonly node: {
        readonly " $fragmentSpreads": FragmentRefs<"TaskListItem_task">;
      } | null;
    }>;
  } | null;
  readonly " $fragmentType": "TaskList_query";
};
export type TaskList_query$key = {
  readonly " $data"?: TaskList_query$data;
  readonly " $fragmentSpreads": FragmentRefs<"TaskList_query">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "TaskList_query",
  "selections": [
    {
      "alias": null,
      "args": null,
      "concreteType": "TasksConnection",
      "kind": "LinkedField",
      "name": "allTasks",
      "plural": false,
      "selections": [
        {
          "alias": null,
          "args": null,
          "concreteType": "TasksEdge",
          "kind": "LinkedField",
          "name": "edges",
          "plural": true,
          "selections": [
            {
              "alias": null,
              "args": null,
              "concreteType": "Task",
              "kind": "LinkedField",
              "name": "node",
              "plural": false,
              "selections": [
                {
                  "args": null,
                  "kind": "FragmentSpread",
                  "name": "TaskListItem_task"
                }
              ],
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

(node as any).hash = "9ee01cb81ca6002bc8109614efdb2a97";

export default node;
