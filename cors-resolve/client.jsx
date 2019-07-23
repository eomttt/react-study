import React from 'react';
import ReactDOM from 'react-dom';

import { hot } from 'react-hot-loader/root';

import App from './App'; // Class 사용

const Hot = hot(App);

ReactDOM.render(
  <Hot />,
  document.getElementById('root')
); // Class 사용
