import * as React from 'react';
import { TransitionModalContainer } from '../../shared/transitionModalContainer';
import { MessageModal } from '../../shared/messageModal';
import { IFeedMessageModalProps } from 'feed';


class FeedMessageModal extends React.Component<IFeedMessageModalProps, any> {
  private exitTimer: NodeJS.Timer | null = null;

  constructor(props: IFeedMessageModalProps) {
    super(props);
  }

  public componentDidUpdate(prevProps: IFeedMessageModalProps): void {
    if (!!this.exitTimer) {
      clearTimeout(this.exitTimer);
    }
    this.exitTimer =  setTimeout(() => {
      this.props.close();
    }, 2000);
  }

  public render(): JSX.Element {
    const { shouldShow, message } = this.props;

    return (
      <TransitionModalContainer inProp={shouldShow}>
        <MessageModal
          message={message}
          messageClassName='fail-message'
        />
      </TransitionModalContainer>
    )
  }
}

export default FeedMessageModal;
