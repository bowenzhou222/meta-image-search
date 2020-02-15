import * as React from 'react';
import moment from 'moment';

import { IFeedDashboardProps } from 'feed';

class FeedDashboard extends React.Component<IFeedDashboardProps, any> {
  constructor(props: IFeedDashboardProps) {
    super(props);
  }

  public render(): JSX.Element {
    const { feeds } = this.props;
    return (
      <div className='feed-dashboard-container'>
        {
          feeds.items.map((feed, idx) => (
            <div className='feed-item-wrapper' >
              <div className='feed-item-container' key={`${idx}`} id={`${idx}`}>
                <div className='feed-image-container'>
                  <img src={feed.media.m} alt='Whoops!' />
                </div>
                <div className='feed-details-container'>
                  <div className='feed-detail author'>
                    <div className='feed-details-field-title'>Author</div>
                    <div className='feed-detail-value'>{feed.author}</div>
                  </div>
                  <div className='feed-detail date'>
                    <div className='feed-details-field-title'>Date</div>
                    <div className='feed-detail-value'>{moment(feed.dateTaken).format('DD/MMM/YYYY')}</div>
                  </div>
                  <div className='feed-detail tags'>
                    <div className='feed-details-field-title'>Tags</div>
                    <div className='feed-detail-value'>{feed.tags}</div>
                  </div>
                  <a href={feed.link} target='_blank' rel='noopener noreferrer'>View the full image</a>
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
