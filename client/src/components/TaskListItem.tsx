import { graphql } from "babel-plugin-relay/macro";
import { useFragment } from "react-relay/hooks";
import type { TaskListItem_task$key } from "./__generated__/TaskListItem_task.graphql";

// MUI imports
import Checkbox from "@mui/material/Checkbox";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";


interface Props {
  task: TaskListItem_task$key;
}

export default function TaskListItem(props: Props) {
  const data = useFragment(
    graphql`
      fragment TaskListItem_task on Task {
        id
        task
        completed
      }
    `,
    props.task
  );

  return (
    <FormGroup>
      <FormControlLabel control={<Checkbox defaultChecked={data.completed} key={data.id} />} label={data.task} />
    </FormGroup>
  );
}
