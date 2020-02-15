declare namespace feed {
  interface IFeedState {
    feeds: IFetchFeedsResponse
    err: any
  }

  interface IFeedAction {
    type: string
    feeds: IFetchFeedsResponse
    err: any
  }

  interface IFeedContainerStateProps {
    feeds: IFetchFeedsResponse
    err: any
    [x: string]: any
  }

  interface IFeedContainerDispatchProps {
    fetchFeeds: (query: IFetchFeedsQuery) => any
    clearApiError: () => void
  }

  interface IFeedContainerPassedProps {
    [x: string]: any
  }

  type IFeedContainerProps = IFeedContainerStateProps & IFeedContainerDispatchProps & IFeedContainerPassedProps

  interface IFeedContainerState {
    ids: string
    isFetching: boolean
    [x: string]: any
  }

  interface IFetchFeedsQuery {
    id?: string
    ids?: string
    tags?: string
    tagmode?: 'all' | 'any'
  }

  interface IFetchFeedsResponse {
    title: string
    link: string
    description: string
    modified: string
    generator: string
    items: Array<IFeedDetail>
  }

  interface IFeedDetail {
    title: string
    link: string
    media: {
      m: string
    }
    dateTaken: string
    description: string
    published: string
    author: string
    authorId: string
    tags: string
  }

  interface IFetchFeedsSuccessAction {
    type: string
    feeds: IFetchFeedsResponse
  }

  interface IFetchFeedsFailAction {
    type: string
    err: any
  }

  interface IClearApiErrorAction {
    type: string
  }

  // feed dashabord
  interface IFeedDashboardProps {
    feeds: IFetchFeedsResponse
    handleClickFeed: (type: 'author' | 'tags', value: string) => void
    [x: string]: any
  }

  // message modal
  interface IFeedMessageModalProps {
    close: () => void,
    message: string,
    shouldShow: boolean,
  }
}

export = feed;
