import { StrictMode } from 'react';
import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom/client';

import { AuthProvider } from '@nutri/client-auth';
import { ClientAuthService } from './app/services/ClientAuthService';
import App from './app/app';
import { RootStoreProvider } from './app/providers/RootStoreProvider';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);
const authService = new ClientAuthService();

root.render(
  <StrictMode>
    <BrowserRouter>
      <AuthProvider authService={authService}>
        <RootStoreProvider>
          <App />
        </RootStoreProvider>
      </AuthProvider>
    </BrowserRouter>
  </StrictMode>,
);
