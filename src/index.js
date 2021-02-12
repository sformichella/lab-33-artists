import React from 'react';
import { render } from 'react-dom';
import App from './components/app/App';
import { AppProvider } from './state/appContext';

render(
  <AppProvider>
    <App />
  </AppProvider>,
  document.getElementById('root')
);
