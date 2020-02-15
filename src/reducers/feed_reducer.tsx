import { IFeedState, IFeedAction } from 'feed'
import { FETCH_FEEDS_SUCCESS, FETCH_FEEDS_FAIL, CLEAR_API_ERROR } from '../components/feed/action';

const defaultState: IFeedState = {
  feeds: {
    title: '',
    link: '',
    description: '',
    modified: '',
    generator: '',
    items: [],
  },
  err: null,
};

const feedReducer = (state: IFeedState = defaultState, action: IFeedAction): IFeedState => {
  const {
    type,
    feeds,
    err,
  } = action;

  Object.freeze(state);

  const newState = Object.assign({}, state);

  switch (type) {
    case FETCH_FEEDS_SUCCESS:
      return Object.assign({}, newState, { feeds, err: null });
    case FETCH_FEEDS_FAIL:
      return Object.assign({}, newState, { err });
    case CLEAR_API_ERROR:
      return Object.assign({}, newState, { err: null });
    default:
      return newState;
  }
}

export default feedReducer;
