import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import store from './redux/store';

import App from './routes';
import './index.css';

const RootApp = (
  <Provider store={store}>
    <App />
  </Provider>
);
ReactDOM.render(RootApp, document.getElementById('root'));
