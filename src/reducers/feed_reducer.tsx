import { IFeedState, IFeedAction } from 'feed'
import { FETCH_FEEDS_SUCCESS, FETCH_FEEDS_FAIL } from '../components/feed/action';

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
      return Object.assign({}, newState, { feeds });
    case FETCH_FEEDS_FAIL:
      return Object.assign({}, newState, { err });
    default:
      return newState;
  }
}

export default feedReducer;
