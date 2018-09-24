import { createStore, applyMiddleware } from 'redux';
import promise from 'redux-promise-middleware';
import createLogger from 'redux-logger';
import thunk from 'redux-thunk';
import { compose } from 'recompose';

import reducers from './reducers';

const middlewares = [promise(), createLogger, thunk];

const store = createStore(
  reducers,
  compose(
    applyMiddleware(...middlewares),
    /* eslint-disable no-underscore-dangle */
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  ),
);

export default store;
