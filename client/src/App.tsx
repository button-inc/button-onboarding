import { Suspense } from 'react';

import { relayEnvironment } from './lib';
import './App.css';
import { graphql } from 'babel-plugin-relay/macro';
import './App.css';

import {
  RelayEnvironmentProvider,
  loadQuery,
  usePreloadedQuery,
} from 'react-relay/hooks';
import { TodoList } from './components';

interface AppProps {
  preloadedQuery: any;
}

const query = graphql`
  query AppQuery {
    allTasks(orderBy: NATURAL) {
      edges {
        node {
          rowId
          completed
          dateCreated
          dateUpdated
          task
        }
      }
    }
  }
`;
const preloadedQuery = loadQuery(relayEnvironment, query, {});

function App({ preloadedQuery }: AppProps) {
  const data = usePreloadedQuery(query, preloadedQuery);

  return (
    <div className="App">
      <header className="App-header">
        <TodoList />
      </header>
    </div>
  );
}

function AppRoot() {
  return (
    <RelayEnvironmentProvider environment={relayEnvironment}>
      <Suspense fallback={'Loading...'}>
        <App preloadedQuery={preloadedQuery} />
      </Suspense>
    </RelayEnvironmentProvider>
  );
}

export default AppRoot;
