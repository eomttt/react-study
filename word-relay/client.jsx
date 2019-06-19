import React from 'react';
import ReactDOM from 'react-dom';

// import hot from 'react-hot-loader/root';
const { hot } = require('react-hot-loader/root');

import ClassApp from './word-relay'; // Class 사용
import HooksApp from './word-relay-hook'; // Hooks 사용

const Hot = hot(ClassApp);
// const Hot = hot(HooksApp);

ReactDOM.render(<Hot />, document.getElementById('root')); // Class 사용
