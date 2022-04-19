import { graphql } from "babel-plugin-relay/macro";
import { useFragment } from "react-relay/hooks";
import type { TaskListItem_task$key } from "./__generated__/TaskListItem_task.graphql";
import TaskCompletedMutation from "./schema/mutations/TaskCompletedMutation";

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

  const handleChange = () => {
    TaskCompletedMutation.commit(data.id, !data.completed);
  };

  return (
    <FormGroup>
      <FormControlLabel
        control={<Checkbox checked={data.completed} key={data.id} onChange={handleChange} />}
        label={data.task}
      />
    </FormGroup>
  );
}
