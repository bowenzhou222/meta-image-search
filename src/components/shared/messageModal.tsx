import * as React from 'react';

export const MessageModal = ({
  message, messageClassName,
}: {
  message: string, messageClassName:string,
}) => (
  <div className='full-screen-modal-wrapper'>
    <div className='modal-content'>
      <div className={messageClassName || ''}>
        {message}
      </div>
    </div>
  </div>
);
