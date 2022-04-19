import { graphql } from "babel-plugin-relay/macro";
import TaskListItem from "./TaskListItem";
import { useFragment } from "react-relay/hooks";

// MUI imports
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { Grid } from "@mui/material";

interface Props {
  tasks: any;
}

export default function TaskList(props: Props) {
  const data = useFragment(
    graphql`
      fragment TaskList_tasks on Query {
        allTasks {
          nodes {
            id
            ...TaskListItem_task
          }
        }
      }
    `,
    props.tasks
  );

  const tasks = data.allTasks.nodes.map((node) => <TaskListItem task={node} key={node.id} />);

  return (
    <Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justifyContent="center"
      style={{ minHeight: "100vh" }}
    >
      <Grid item xs={3} style={{ boxShadow: "5px 10px grey" }}>
        <Card sx={{ border: 1 }}>
          <CardContent>{tasks}</CardContent>
        </Card>
      </Grid>
    </Grid>
  );
}
