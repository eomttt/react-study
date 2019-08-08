import { applyMiddleware, compose, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';

import sagas from './sagas';
import reducers from './reducers';

const sagaMiddleware = createSagaMiddleware()

const middlewares = [sagaMiddleware];
const enhancer = compose(
  applyMiddleware(...middlewares),
  typeof window.__REDUX_DEVTOOLS_EXTENSION__ !== 'undefined' ? window.__REDUX_DEVTOOLS_EXTENSION__() : (f) => f,
);

const store = createStore(reducers, enhancer);
sagaMiddleware.run(sagas);

export default store;
