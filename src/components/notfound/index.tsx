import * as React from 'react';

import './styles.scss';
import { urlTo } from '../../utils';

const NotFound = (): JSX.Element => (
  <div className='not-found'>
    <p>NOT FOUND</p>
    <a href={urlTo['home']} >BACK TO HOME</a>
  </div>
);

export default NotFound;
