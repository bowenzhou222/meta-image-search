import Axios from 'axios';

import { IFetchFeedsQuery, IFetchFeedsResponse } from 'feed';
import { baseUrl } from '../config';

export const fetchFeeds = (query: IFetchFeedsQuery): Promise<IFetchFeedsResponse> => {
  return Axios({
    method: 'GET',
    baseURL: baseUrl,
    params: query,
  });
};
