import { applyMiddleware, compose, createStore, Store } from 'redux';
import thunk from 'redux-thunk';
import { createBrowserHistory, History } from 'history';
import { routerMiddleware } from 'connected-react-router'

import createRootReducer from './reducers';

export const history: History<History.PoorMansUnknown> = createBrowserHistory();

const enchancers = compose(
  applyMiddleware(
    thunk,
    routerMiddleware(history),
  ),
);

const store: Store = createStore(createRootReducer(history), enchancers);

export default store;
