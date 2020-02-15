import './styles.scss';

import * as React from 'react';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';

import { fetchFeedsAction, clearApiError } from './action';

import {
  IFeedContainerProps, IFeedContainerState, IFeedContainerDispatchProps, IFetchFeedsQuery,
  IFeedContainerPassedProps, IFeedContainerStateProps, IFeedState,
} from 'feed';
import { SearchButton } from '../shared/button';
import FeedDashboard from './sections/dashboard';
import FeedMessageModal from './sections/feedMessageModal';

class FeedContainer extends React.Component<IFeedContainerProps, IFeedContainerState> {
  private fetchFeedsTimer: NodeJS.Timer | null = null;

  constructor(props: IFeedContainerProps) {
    super(props);

    this.state = {
      ids: '',
      tags: '',
      isFetching: false,
    };
  }

  public componentDidMount(): void {
    this.handleFetchFeeds();
  }

  public handleFetchFeeds = () => {
    const { fetchFeeds } = this.props;
    const { ids, tags } = this.state;
    this.setState({ isFetching: true }, () => {
      fetchFeeds({ ids, tags })
        .then(() => {
          this.setState({ isFetching: false });
        });
    });
  }

  public handleIdsChange = (event: React.FormEvent<HTMLInputElement>) => {
    this.setState({ ids: event.currentTarget.value }, () => {
      if (!!this.fetchFeedsTimer) {
        clearTimeout(this.fetchFeedsTimer);
      }
      this.fetchFeedsTimer = setTimeout(this.handleFetchFeeds, 1000);
    });
  }

  public handleTagsChange = (event: React.FormEvent<HTMLInputElement>) => {
    this.setState({ tags: event.currentTarget.value }, () => {
      if (!!this.fetchFeedsTimer) {
        clearTimeout(this.fetchFeedsTimer);
      }
      this.fetchFeedsTimer = setTimeout(this.handleFetchFeeds, 1000);
    });
  }

  public handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    this.handleFetchFeeds();
  }

  public handleClickFeed = (type: 'author' | 'tags', value: string): void => {
    if (type === 'author') {
      this.setState({ ids: value }, this.handleFetchFeeds)
    }
    if (type === 'tags') {
      this.setState({ tags: value }, this.handleFetchFeeds)
    }
  }

  public render(): JSX.Element {
    const { ids, tags } = this.state;
    const { feeds, err, clearApiError } = this.props;

    return (
      <div className='feed-container'>
        <form className='feed-search-form' onSubmit={this.handleSubmit}>
          <label htmlFor='ids' className='col-md-6'>
            <span>Ids</span>
            <input type='text' id='ids' value={ids} onChange={this.handleIdsChange} />
          </label>
          <label htmlFor='tags' className='col-md-6'>
            <span>tags</span>
            <input type='text' id='tags' value={tags} onChange={this.handleTagsChange} />
          </label>
          <SearchButton />
        </form>
        <FeedDashboard feeds={feeds} handleClickFeed={this.handleClickFeed}/>
        <FeedMessageModal
          message={err}
          shouldShow={!!err}
          close={clearApiError}
        />
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
  clearApiError: () => dispatch(clearApiError()),
});

export default connect<IFeedContainerStateProps, {}, IFeedContainerPassedProps, any>(mapStateToProps, mapDispatchToProps)(FeedContainer);
