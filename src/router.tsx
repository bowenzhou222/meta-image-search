import * as React from 'react';
import { Provider } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';
import { Store } from 'redux';

import NotFound from './components/notfound';
import Feed from './components/feed';
import { history } from './store';

interface IRouterProps {
  store: Store,
}

class AppRouter extends React.Component<IRouterProps, {}> {
  constructor(props: IRouterProps) {
    super(props);
  }

  public render(): JSX.Element {
    const { store } = this.props;
    return (
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <Switch>
            <Route exact={true} path='/' component={Feed} />
            <Route component={NotFound}/>
          </Switch>
        </ConnectedRouter>
      </Provider>
    );
  }
}

export default AppRouter;
