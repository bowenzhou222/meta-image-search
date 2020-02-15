import { IFeedState, IFeedAction } from 'feed'

const defaultState = {};

const feedReducer = (state: IFeedState = defaultState, action: IFeedAction): IFeedState => {
  const {
    type,
  } = action;

  Object.freeze(state);

  const newState = Object.assign({}, state);

  switch (type) {
    default:
      return newState;
  }
}

export default feedReducer;
