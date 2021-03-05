import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import GlobalStyles from './styles/global';

import Routes from './routes/index';
import { AuthProvider } from './hooks/auth';

const App: React.FC = () => (
  <BrowserRouter>
    <AuthProvider>
      <Routes />
    </AuthProvider>

    <GlobalStyles />
    <ToastContainer autoClose={3000} />
  </BrowserRouter>
);

export default App;
