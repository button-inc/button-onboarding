import React from "react";
import { graphql } from "babel-plugin-relay/macro";
import {
  loadQuery,
  RelayEnvironmentProvider,
  usePreloadedQuery,
} from "react-relay/hooks";
import RelayEnvironment from "./RelayEnvironment";
import { TodoList } from "./components/todolist/TodoList";
import "./index.css";
const { Suspense } = React;

const AllTasksQuery = graphql`
  query AppAllTasksQuery {
   ...TodoList_tasks
  }
`;

const preloadedQuery = loadQuery(RelayEnvironment, AllTasksQuery, {});

function App(props: any) {
  const data: any = usePreloadedQuery(AllTasksQuery, props.preloadedQuery);
  return (
    <div className="container_grid">
      <TodoList className="grid" tasks={data} />
    </div>
  );
}

function AppRoot() {
  return (
    <RelayEnvironmentProvider environment={RelayEnvironment}>
      <Suspense fallback={"Loading..."}>
        <App preloadedQuery={preloadedQuery} />
      </Suspense>
    </RelayEnvironmentProvider>
  );
}

export default AppRoot;
