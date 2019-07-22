import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import create from './store';
import { hot } from 'react-hot-loader/root';

import Popup from './components/Popups'; // Class 사용

const Store = create();
const Hot = hot(Popup);

ReactDOM.render(
  <Provider store={Store}>
    <Hot />
  </Provider>,
  document.getElementById('root')
); // Class 사용
