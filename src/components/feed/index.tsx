import './styles.scss';

import * as React from 'react';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';

import { fetchFeedsAction } from './action';

import {
  IFeedContainerProps, IFeedContainerState, IFeedContainerDispatchProps, IFetchFeedsQuery,
  IFeedContainerPassedProps, IFeedContainerStateProps, IFeedState,
} from 'feed';
import { SearchButton } from '../shared';
import FeedDashboard from './sections/dashboard';

class FeedContainer extends React.Component<IFeedContainerProps, IFeedContainerState> {
  constructor(props: IFeedContainerProps) {
    super(props);

    this.state = {
      keyword: '',
      isFetching: false,
    };
  }

  public componentDidMount(): void {
    this.handleFetchFeeds();
  }

  public handleFetchFeeds = () => {
    const { fetchFeeds } = this.props;
    this.setState({ isFetching: true }, () => {
      fetchFeeds({})
        .then(() => {
          this.setState({ isFetching: false });
        });
    });
  }

  public handleKeywordChange = (event: React.FormEvent<HTMLInputElement>) => {
    this.setState({ keyword: event.currentTarget.value });
  }

  public handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    this.handleFetchFeeds();
  }

  public render(): JSX.Element {
    const { keyword } = this.state;
    const { feeds } = this.props;

    return (
      <div className='feed-container'>
        <form className='feed-search-form' onSubmit={this.handleSubmit}>
          <label htmlFor='keyword'>
            Keyword:
            <input type='text' id='keyword' value={keyword} onChange={this.handleKeywordChange} />
          </label>
          <SearchButton />
        </form>
        <FeedDashboard feeds={feeds} />
      </div>
    );
  }
}

const mapStateToProps = ({ Feed }: { Feed: IFeedState }): IFeedContainerStateProps => ({
  feeds: Feed.feeds,
  err: Feed.err,
});

const mapDispatchToProps = (dispatch: Dispatch<any>): IFeedContainerDispatchProps => ({
  fetchFeeds: (query: IFetchFeedsQuery) => dispatch(fetchFeedsAction(query)),
});

export default connect<IFeedContainerStateProps, {}, IFeedContainerPassedProps, any>(mapStateToProps, mapDispatchToProps)(FeedContainer);
