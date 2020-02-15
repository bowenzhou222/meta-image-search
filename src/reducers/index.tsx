import { History } from 'history';
import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import Feed from './feed_reducer';

const createRootReducer = <T extends History.PoorMansUnknown>(history: History<T>) => combineReducers({
  router: connectRouter(history),
  Feed,
});

export default createRootReducer;
