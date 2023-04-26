import React from 'react';
import ReactDOM from 'react-dom/client';

/* ThemeProvider: vai compartilhar com todas as nossas páginas 
um MESMO tema, ou seja, os arquivos theme.js e global.js;
*/
import { ThemeProvider } from 'styled-components';
import GlobalStyles from './styles/global';
import theme from './styles/theme';

import { AuthProvider } from './hooks/auth';

import { Routes } from './routes';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <AuthProvider>
        <Routes />
      </AuthProvider>
      </ThemeProvider>
  </React.StrictMode>,
);
