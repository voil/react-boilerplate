/*
 * =============================================================================
 * Project: boilerplate
 * Created Date: 2018-03-12, 09:12:09
 * Author: Przemysław Drzewicki <przemyslaw.drzewicki@gmail.com>
 * =============================================================================
 * Last Modified: 2018-03-13, 11:44:09
 * Modified By: Przemysław Drzewicki
 * =============================================================================
 * Copyright (c) 2018 webonweb
 * =============================================================================
 */

// =============================================================================
// Loading dependencies.
// =============================================================================
import app from 'routes/app';
import Client from 'helpers/client';
import Reducer from 'stores/create';
import React from 'react';
import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router';
import pages from './routes';
// =============================================================================
// Create global variables.
// =============================================================================
const store = new Reducer(new Client());
// =============================================================================
// Main routing variable.
// =============================================================================
const routes = {
  component: app,
  childRoutes: pages(store)
};
// =============================================================================
// Exporting routing.
// =============================================================================
export default () =>
  (<Provider store={store}
    key="provider">
    <Router history={browserHistory}
      routes={routes} />
  </Provider>);