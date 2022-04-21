import { graphql } from "babel-plugin-relay/macro";
import { useFragment } from "react-relay/hooks";
import type { TaskListItem_task$key } from "./__generated__/TaskListItem_task.graphql";
import TaskCompletedMutation from "./schema/mutations/TaskCompletedMutation";
import DeleteTaskMutation from "./schema/mutations/DeleteTaskMutation";

// MUI imports
import Checkbox from "@mui/material/Checkbox";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import { Grid, IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { useState } from "react";

interface Props {
  task: TaskListItem_task$key;
}

export default function TaskListItem(props: Props) {
  const [removeIconBgColor, setRemoveIconBgColor] = useState("grey");

  const styles = {
    color: removeIconBgColor,
  };

  const data = useFragment(
    graphql`
      fragment TaskListItem_task on Task {
        id
        rowId
        task
        completed
      }
    `,
    props.task
  );

  const handleChange = () => {
    TaskCompletedMutation.commit(data.id, !data.completed);
  };

  const handleDeleteTask = () => {
    DeleteTaskMutation.commit(data.rowId);
  };

  return (
    <Grid container alignItems="center" justifyContent="space-between">
      <Grid item xs={8}>
        <FormGroup>
          <FormControlLabel
            control={<Checkbox checked={data.completed} key={data.id} onChange={handleChange} />}
            label={data.task}
          />
        </FormGroup>
      </Grid>
      <Grid item xs={1}>
        <IconButton
          aria-label="delete"
          onMouseEnter={() => setRemoveIconBgColor("red")}
          onMouseLeave={() => setRemoveIconBgColor("grey")}
          onClick={handleDeleteTask}
        >
          <DeleteIcon style={styles} />
        </IconButton>
      </Grid>
    </Grid>
  );
}
