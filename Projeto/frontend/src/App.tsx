import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import { AuthProvider } from './hooks/auth';

import GlobalStyle from './styles/global';

import Routes from './routes';

export const App: React.FC = () => {
  return (
    <AuthProvider>
      <Router>
        <Routes />
        <GlobalStyle />
      </Router>
    </AuthProvider>
  );
};

export default App;
