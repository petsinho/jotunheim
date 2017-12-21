import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import reducers from './reducers';
import sagas from './sagas';

// saga middleware
const sagaMiddleware = createSagaMiddleware();

const allMiddleware = [
  sagaMiddleware,
  //....
];
// apply the allMiddleware
const middleware = applyMiddleware(...allMiddleware);
const isDevMode = window.location.hostname === 'localhost';

/* eslint-disable no-underscore-dangle */
export default createStore(
  reducers,
  isDevMode ? window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() : {},
  middleware
);
/* eslint-enable */

sagaMiddleware.run(sagas);
