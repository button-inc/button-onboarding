import { graphql } from "babel-plugin-relay/macro";
import TaskListItem from "./TaskListItem";
import { useFragment } from "react-relay/hooks";

// MUI imports
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { Grid } from "@mui/material";
import AddTask from "./AddTask";

interface Props {
  tasks: any;
}

export default function TaskList(props: Props) {
  const data = useFragment(
    graphql`
      fragment TaskList_tasks on Query {
        allTasks(first: 200) @connection(key: "TaskList_allTasks") {
          __id
          edges {
            node {
              id
              ...TaskListItem_task
            }
          }
        }
      }
    `,
    props.tasks
  );

  const tasks = data.allTasks.edges.map((edge) => <TaskListItem connectionId={data.allTasks.__id} task={edge.node} key={edge.node.id} />);

  return (
    <Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justifyContent="center"
      style={{ minHeight: "100vh" }}
    >
      <Grid item xs={8} style={{ boxShadow: "5px 10px grey", minWidth: "22rem" }}>
        <Card sx={{ border: 1 }}>
          <CardContent>{tasks}</CardContent>
          <AddTask connectionId={data.allTasks.__id} />
        </Card>
      </Grid>
    </Grid>
  );
}
