import React from 'react';
import ReactDOM from 'react-dom/client';
import { Main } from './Main';
import { theme } from './styles/thema';
import { ThemeProvider } from '@mui/material/styles';
import { BrowserRouter } from "react-router-dom";
import { Provider } from 'react-redux';
import { store } from './redux/store'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <BrowserRouter>
  <Provider store={store}>
      <ThemeProvider theme={theme}>
          <Main />
      </ThemeProvider>
      </Provider>
  </BrowserRouter>
);

