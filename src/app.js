import 'babel-polyfill';

import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import Application from './containers/Application';
import configureStore from './store/configureStore';

// Initial state
let _initialState = {};
const store = configureStore(_initialState);
// Exporting store is fine as long as you keep the state immutable
export default store;

render(
  <Provider store={store}>
    <Application />
  </Provider>,

  document.getElementById('main-container')
);
