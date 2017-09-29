import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import database from './state';

import Application from './containers/Application';

ReactDOM.render(
  <Provider store={database} >
    <Application />
  </Provider>,
  document.getElementById('root')
);