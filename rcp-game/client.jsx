import React from 'react';
import ReactDOM from 'react-dom';

import { hot } from 'react-hot-loader/root';

import RcpGame from './RcpGame'; // Class 사용
// import RcpGameHook from './RcpGameHook'; // Hooks 사용

const Hot = hot(RcpGame);
// const Hot = hot(RcpGameHook);

ReactDOM.render(<Hot />, document.getElementById('root')); // Class 사용
