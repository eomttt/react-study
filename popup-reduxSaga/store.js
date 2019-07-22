import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga';
import rootSaga from './sagas';

const sagaMiddleware = createSagaMiddleware()

import reducers from './reducers';

const create = () => {
    const store = createStore(
      reducers,
      applyMiddleware(sagaMiddleware));

    sagaMiddleware.run(rootSaga);

    return store;
}

export default create;
