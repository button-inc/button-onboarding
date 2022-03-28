import { relayEnvironment } from './lib';
import './App.css';
import { RelayEnvironmentProvider } from 'react-relay/hooks';

function App() {
  return (
    <RelayEnvironmentProvider environment={relayEnvironment}>
      <div>todo</div>
    </RelayEnvironmentProvider>
  );
}

export default App;
