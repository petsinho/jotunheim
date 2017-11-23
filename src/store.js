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
let middleware = applyMiddleware(...allMiddleware);

export default createStore(reducers, middleware);

sagaMiddleware.run(sagas);
