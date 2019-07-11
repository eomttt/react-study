import React from 'react';
import ReactDOM from 'react-dom';

import { hot } from 'react-hot-loader/root';

import Lotto from './Lotto'; // Class 사용
import LottoHook from './Lotto-hook'; // Hooks 사용

// const Hot = hot(Lotto);
const Hot = hot(LottoHook);

ReactDOM.render(<Hot />, document.getElementById('root')); // Class 사용
