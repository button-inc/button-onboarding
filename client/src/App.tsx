import { Suspense } from 'react';
import { relayEnvironment } from './lib';
import { graphql } from 'babel-plugin-relay/macro';
import {
  RelayEnvironmentProvider,
  loadQuery,
  usePreloadedQuery,
} from 'react-relay/hooks';

import { TodoList } from './components';
import './styles/App.css';

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
      <TodoList initialListItems={data} />
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
