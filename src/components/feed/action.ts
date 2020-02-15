import { Dispatch } from 'redux';

import {
  IFetchFeedsQuery, IFetchFeedsResponse, IFetchFeedsSuccessAction, IFetchFeedsFailAction,
} from 'feed';
import { fetchFeeds } from '../../clients';

export const FETCH_FEEDS_SUCCESS = 'FETCH_FEEDS_SUCCESS';
export const FETCH_FEEDS_FAIL = 'FETCH_FEEDS_FAIL';

export const fetchFeedsSuccess = (feeds: IFetchFeedsResponse) => ({
  type: FETCH_FEEDS_SUCCESS,
  feeds,
});

export const fetchFeedsFail = (err: any) => ({
  type: FETCH_FEEDS_FAIL,
  err,
});

export const fetchFeedsAction = (query: IFetchFeedsQuery) => {
  return async (dispatch: Dispatch<IFetchFeedsSuccessAction | IFetchFeedsFailAction>) => {
    try {
      const feeds = await fetchFeeds(query);
      dispatch(fetchFeedsSuccess(feeds));
      return;
    } catch(err) {
      dispatch(fetchFeedsFail(err));
      return;
    }
  };
};
