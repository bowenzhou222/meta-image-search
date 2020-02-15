import * as React from 'react';
import { CSSTransition } from 'react-transition-group';

export const TransitionModalContainer = ({ children, inProp }: { children: any, inProp: boolean }): JSX.Element => (
  <CSSTransition
    classNames='transition-modal-container'
    timeout={500}
    in={inProp}
    unmountOnExit
  >
    {children}
  </CSSTransition>
);
