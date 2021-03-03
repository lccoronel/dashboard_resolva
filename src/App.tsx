import React from 'react';

import Login from './modules/auth/pages/Login';

import GlobalStyles from './styles/global';

import { AuthProvider } from './hooks/auth';

const App: React.FC = () => (
  <>
    <AuthProvider>
      <Login />
    </AuthProvider>

    <GlobalStyles />
  </>
);

export default App;
