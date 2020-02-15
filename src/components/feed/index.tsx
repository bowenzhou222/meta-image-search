import * as React from 'react';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';

import { fetchFeedsAction } from './action';

import {
  IFeedContainerProps, IFeedContainerState, IFeedContainerDispatchProps, IFetchFeedsQuery,
  IFetchFeedsResponse, IFeedContainerPassedProps,
} from 'feed';

class FeedContainer extends React.Component<IFeedContainerProps, IFeedContainerState> {
  constructor(props: IFeedContainerProps) {
    super(props);
  }

  public render(): JSX.Element {
    return (
      <div className='feed-container'>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch: Dispatch<any>): IFeedContainerDispatchProps => ({
  fetchFeeds: (query: IFetchFeedsQuery): Promise<IFetchFeedsResponse> => dispatch(fetchFeedsAction(query)),
});

export default connect<{}, {}, IFeedContainerPassedProps>(null, mapDispatchToProps)(FeedContainer);
