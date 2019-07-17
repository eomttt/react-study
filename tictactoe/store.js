import { createStore } from 'redux';

import reducers from './reducers';

const create = () => {
    return createStore(reducers);
}

export default create;