import React from 'react';
import ReactDOM from 'react-dom';

import { hot } from 'react-hot-loader/root';

import ResponseCheck from './ResponseCheck'; // Class 사용
import ResponseCheckHook from './ResponseCheckHook'; // Hooks 사용

// const Hot = hot(ResponseCheck);
const Hot = hot(ResponseCheckHook);

ReactDOM.render(<Hot />, document.getElementById('root')); // Class 사용
