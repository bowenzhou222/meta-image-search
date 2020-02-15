import Axios, { AxiosResponse } from 'axios';

import { IFetchFeedsQuery, IFetchFeedsResponse } from 'feed';
import { baseUrl } from '../config';
import { convertObjectKeysToCamelCase } from '../utils';

export const fetchFeeds = async (query: IFetchFeedsQuery): Promise<IFetchFeedsResponse> => {
  return Axios({
    method: 'GET',
    baseURL: baseUrl,
    url: '/feeds',
    params: {
      nojsoncallback: 1,
      format: 'json',
      tagmode: 'any',
      ...query,
    },
  })
    .then((response: AxiosResponse) => {
      return convertObjectKeysToCamelCase(response.data.data);
    });
};
