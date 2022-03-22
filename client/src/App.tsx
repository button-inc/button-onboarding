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

const { Suspense } = React;

// Define a query
const AppAllTodosQuery = graphql`
query AppQuery {
  ...TodoList_query
}
`;

// Immediately load the query as our app starts. For a real app, we'd move this
// into our routing configuration, preloading data as we transition to new routes.
const preloadedQuery = loadQuery(RelayEnvironment, AppAllTodosQuery, {
  /* query variables */
});

function App(props) {
  const data = usePreloadedQuery(AppAllTodosQuery, props.preloadedQuery);

  return (
    <div className="App">
      <header className="App-header">
        <TodoList query={data} />
      </header>
    </div>
  );
}

function AppRoot(props) {
  const component =
  typeof window !== "undefined" ? (
    <Suspense fallback="loading">
      <App preloadedQuery={preloadedQuery} />
    </Suspense>
  ) : (
    <App preloadedQuery={preloadedQuery} />
  );
return (
  <RelayEnvironmentProvider environment={RelayEnvironment}>
    {component}
  </RelayEnvironmentProvider>
);
}

export default AppRoot;
