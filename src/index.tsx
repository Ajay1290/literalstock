/* eslint-disable import/first */
import 'react-app-polyfill/ie11';
import 'react-app-polyfill/stable';

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import 'sanitize.css/sanitize.css';

import { App } from 'app';
import { HelmetProvider } from 'react-helmet-async';
import { configureAppStore } from 'store/configureStore';
import reportWebVitals from 'reportWebVitals';
import 'swarup/dist/CSS/swarup.min.css';
import 'bootstrap/dist/css/bootstrap.min.css'

import $ from 'jquery';
globalThis.jQuery = $
globalThis.$ = $;

const store = configureAppStore();
const MOUNT_NODE = document.getElementById('literalstock-app') as HTMLElement;

ReactDOM.render(
  <Provider store={store}>
    <HelmetProvider>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </HelmetProvider>
  </Provider>,
  MOUNT_NODE
);

reportWebVitals();
