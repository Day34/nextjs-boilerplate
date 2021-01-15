import { composeWithDevTools } from 'redux-devtools-extension';
import { applyMiddleware, createStore, Middleware, StoreEnhancer } from 'redux';
import { createWrapper, MakeStore } from 'next-redux-wrapper';
import createSagaMiddleware from 'redux-saga';
import logger from 'redux-logger';

import rootReducer from '@stores/index';
import rootSaga from '@sagas/index';

const bindMiddleware = (middleware: Middleware[]): StoreEnhancer => {
  if (process.env.NODE_ENV === 'development') {
    return composeWithDevTools(applyMiddleware(...middleware, logger));
  }

  return applyMiddleware(...middleware);
};

export const makeStore: MakeStore = () => {
  const sagaMiddleware = createSagaMiddleware();
  const middlewares = [sagaMiddleware];

  const store = createStore(rootReducer, bindMiddleware([...middlewares]));
  sagaMiddleware.run(rootSaga);
  return store;
};

// export const wrapper = createWrapper(makeStore, { debug: process.env.NODE_ENV === 'development' });
export const wrapper = createWrapper(makeStore);
