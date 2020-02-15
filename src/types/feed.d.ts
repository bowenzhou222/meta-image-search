declare namespace feed {
  interface IFeedState {}

  interface IFeedAction {
    type: string
  }

  interface IFeedContainerStateProps {
    [x: string]: any
  }

  interface IFeedContainerDispatchProps {
    fetchFeeds: (query: any) => Promise<any>
  }

  interface IFeedContainerPassedProps {
    [x: string]: any
  }

  type IFeedContainerProps = IFeedContainerStateProps & IFeedContainerDispatchProps & IFeedContainerPassedProps

  interface IFeedContainerState {
    [x: string]: any
  }

  interface IFetchFeedsQuery {
    id?: string
    ids?: Array<string>
    tags?: Array<string>
    tagmode?: 'all' | 'any'
  }

  interface IFetchFeedsResponse {
    [x: string]: any
  }
}

export = feed;
