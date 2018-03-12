/*
 * =============================================================================
 * Project: boilerplate
 * Created Date: 2018-03-12, 09:04:08
 * Author: Przemysław Drzewicki <przemyslaw.drzewicki@gmail.com>
 * =============================================================================
 * Last Modified: 2018-03-12, 09:53:54
 * Modified By: Przemysław Drzewicki
 * =============================================================================
 * Copyright (c) 2018 webonweb
 * =============================================================================
 */

// =============================================================================
// Loading dependencies.
// =============================================================================
import React from 'react';
import 'theme/styles/main.sass';
import { render } from 'react-dom';
import Routes from 'app/app.routes';
import * as OfflinePluginRuntime from 'offline-plugin/runtime';

/** Deposition of components */
render(<Routes />, document.getElementById('application'));

/** Launch service worker */
serviceWorker();
/** Launch the hot module reload function */
setHMR();

// =============================================================================
// Additional support functions.
// =============================================================================

/**
 * Run the service workstation for the version
 * production.
 */
function serviceWorker() {
  if (__DEVELOPMENT__) { return false; }
  OfflinePluginRuntime.install();
  return null;
}

/**
 * Hot Module Reload function.
 *
 * @returns
 */
function setHMR() {
  if (!module.hot) { return false; }
  module.hot.accept('app/app.routes', () => {
    const NewRoot = require('app/app.routes').default;
    render(<NewRoot />, document.getElementById('application'));
  });
  return true;
}