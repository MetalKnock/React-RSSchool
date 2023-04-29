import React from 'react';
import './app/styles/index.scss';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { hydrateRoot } from 'react-dom/client';
import { PreloadedState } from '@reduxjs/toolkit';
import { RootState, setupStore } from './shared/store/store';
import App from './app';

declare global {
  interface Window {
    __PRELOADED_STATE__?: PreloadedState<RootState>;
  }
}

export const store = setupStore(window.__PRELOADED_STATE__);
delete window.__PRELOADED_STATE__;

hydrateRoot(
  document.getElementById('root') as HTMLElement,
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
