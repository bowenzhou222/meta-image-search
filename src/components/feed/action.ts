import { Dispatch } from 'redux';

import { IFetchFeedsQuery, IFetchFeedsResponse } from 'feed';
import { fetchFeeds } from '../../clients';

export const fetchFeedsAction = (query: IFetchFeedsQuery): any => {
  return (dispatch: Dispatch<any>): Promise<IFetchFeedsResponse> => {
    return fetchFeeds(query);
  };
};
