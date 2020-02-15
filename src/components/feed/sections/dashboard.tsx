import * as React from 'react';
import ReactTooltip from 'react-tooltip'
import moment from 'moment';

import { IFeedDashboardProps } from 'feed';

class FeedDashboard extends React.Component<IFeedDashboardProps, any> {
  constructor(props: IFeedDashboardProps) {
    super(props);
  }

  public render(): JSX.Element {
    const { feeds, handleClickFeed } = this.props;

    return (
      <div className='feed-dashboard-container'>
        {
          feeds.items.map((feed, idx) => (
            <div className='feed-item-wrapper' key={`${idx}`} >
              <ReactTooltip />
              <div className='feed-item-container' >
                <div className='feed-image-container'>
                  <img src={feed.media.m} alt='Whoops!' />
                </div>
                <div className='feed-details-container'>
                  <div
                    className={`feed-detail author ${feed.author && 'not-empty'}`}
                    onClick={() => handleClickFeed('author', feed.authorId)}
                    data-tip='Search photos posted by this author'
                  >
                    <div className='feed-details-field-title'>Author</div>
                    <textarea disabled className='feed-detail-value' value={feed.author}/>
                  </div>
                  <div className='feed-detail date'>
                    <div className='feed-details-field-title'>Date</div>
                    <textarea disabled className='feed-detail-value' value={moment(feed.dateTaken).format('DD/MMM/YYYY')} />
                  </div>
                  <div
                    className={`feed-detail tags ${feed.tags && 'not-empty'}`}
                    onClick={() => handleClickFeed('tags', feed.tags.split(' ').join(','))}
                    data-tip='Search photos with same tags'
                    data-tip-disable={!feed.tags}
                  >
                    <div className='feed-details-field-title'>Tags</div>
                    <textarea disabled className='feed-detail-value' value={feed.tags} />
                  </div>
                  <a href={feed.link} target='_blank' rel='noopener noreferrer'>View the full size image</a>
                </div>
              </div>
            </div>
          ))
        }
      </div>
    )
  }
}

export default FeedDashboard;
