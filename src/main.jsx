import React from 'react';
import ReactDOM from 'react-dom/client';
import { MatomoProvider, createInstance } from '@datapunt/matomo-tracker-react';
import App from './App';

import './index.css';

const instance = createInstance({
  urlBase: 'https://analytics.dsgdsr.me/',
  siteId: 2,
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <MatomoProvider value={instance}>
    <App />
  </MatomoProvider>
);
