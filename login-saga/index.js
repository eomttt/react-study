import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import { hot } from 'react-hot-loader/root';

import store from './store';
import App from './App';

const Hot = hot(App);

ReactDOM.render(
  <Provider store={store}>
    <Hot />
  </Provider>,
  document.getElementById('root')
);
