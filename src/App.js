import { Suspense, useReducer } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { BrowserRouter } from 'react-router-dom';
import ErrorPage from './pages/error';
import SuspenseFallback from './pages/suspense';
import AppRoutes from './routes';

import { ApezContext } from './utils/context';
import * as ACTIONS from './store/actions/actions';
import * as WalletReducer from './store/reducers/WalletReducer';

const App = () => {
  const [stateWalletReducer, dispatchWalletReducer] = useReducer(
    WalletReducer.WalletReducer,
    WalletReducer.initialState
  );

  const handleConnect = (address) => {
    dispatchWalletReducer(ACTIONS.connect({ address: address }));
  };

  const handleDisconnect = () => {
    dispatchWalletReducer(ACTIONS.disconnect());
  };

  return (
    <ErrorBoundary FallbackComponent={ErrorPage}>
      <BrowserRouter>
        <Suspense fallback={<SuspenseFallback />}>
          <ApezContext.Provider
            value={{
              connectState: stateWalletReducer.connect,
              addressState: stateWalletReducer.address,
              handleConnect,
              handleDisconnect,
            }}
          >
            <AppRoutes />
          </ApezContext.Provider>
        </Suspense>
      </BrowserRouter>
    </ErrorBoundary>
  );
};

export default App;
