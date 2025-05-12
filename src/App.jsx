import { BrowserRouter as Router } from 'react-router-dom';

import AppRoutes from './component/AppRoutes';
import { useState } from 'react';
import store, { persistor } from './store/store';
import Loading from './component/Loading';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';

function App() {
  const [ready, setReady] = useState(false);

  return (
    <Provider store={store}>
      <PersistGate
        loading={<Loading />}
        persistor={persistor}
        onBeforeLift={() => {
          setReady(true);
        }}
      >
        {ready ? (
          <Router>
            <AppRoutes />
          </Router>
        ) : null}
      </PersistGate>
    </Provider>
  );
}

export default App;
