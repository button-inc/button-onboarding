import React from 'react';
import './App.css';
import graphql from 'babel-plugin-relay/macro';
import {
  RelayEnvironmentProvider,
  loadQuery,
  usePreloadedQuery,
} from 'react-relay/hooks';
import RelayEnvironment from './RelayEnvironment';
import TodoList from './components/TodoList';
import { commitCreateTodoMutation } from './mutations/CreateTodoMutation';

const { Suspense } = React;
 
// Define a query
const appQuery = graphql`
  query AppQuery {
    ...TodoList_query
  }
`;

// Immediately load the query as our app starts. For a real app, we'd move this
// into our routing configuration, preloading data as we transition to new routes.
const preloadedQuery = loadQuery(RelayEnvironment, appQuery, {/* query params*/});

// Inner component that reads the preloaded query results via `usePreloadedQuery()`.
// This works as follows:
// - If the query has completed, it returns the results of the query.
// - If the query is still pending, it "suspends" (indicates to React that the
//   component isn't ready to render yet). This will show the nearest <Suspense>
//   fallback.
// - If the query failed, it throws the failure error. For simplicity we aren't
//   handling the failure case here.
// TODO: proper types
function App(props:any) {
  const data: any = usePreloadedQuery(appQuery, props.preloadedQuery);

  const addTodo = (task: string) => {
    // TODO: update data with relay -> graphql

    commitCreateTodoMutation(RelayEnvironment, task);
  }

  return (
    <div className="App">
      <header className="App-header">
        <TodoList query={data} addTodo={addTodo} />
      </header>
    </div>
  );
}

// The above component needs to know how to access the Relay environment, and we
// need to specify a fallback in case it suspends:
// - <RelayEnvironmentProvider> tells child components how to talk to the current
//   Relay Environment instance
// - <Suspense> specifies a fallback in case a child suspends.
// TODO: proper types
function AppRoot() {

  return (
    <RelayEnvironmentProvider environment={RelayEnvironment}>
      <Suspense fallback={'Loading...'}>
        <App preloadedQuery={preloadedQuery} />
      </Suspense>
    </RelayEnvironmentProvider>
  );
}

export default AppRoot;
