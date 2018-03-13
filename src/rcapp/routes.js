/*
 * =============================================================================
 * Project: boilerplate
 * Created Date: 2018-03-12, 09:11:57
 * Author: Przemysław Drzewicki <przemyslaw.drzewicki@gmail.com>
 * =============================================================================
 * Last Modified: 2018-03-13, 11:43:19
 * Modified By: Przemysław Drzewicki
 * =============================================================================
 * Copyright (c) 2018 webonweb
 * =============================================================================
 */

/**
 * Generate paths for the platform.
 *
 * @param {any} store
 * @returns
 */
const Routes = store => [
  {
    path: '/',
    getComponent(location, cb) {
      getPage('home/index', store, cb);
    }
  },
  {
    path: '/*',
    getComponent(location, cb) {
        import('routes/notFound').then(loadRoute(cb, true)).catch(errorLoading);
    }
  }
];

export default Routes;
// =============================================================================
// Support functions.
// =============================================================================
/**
 * Load a container.
 *
 * @param {string} [container=""]
 * @param {any} [store={}]
 * @param {any} [cb=() => {}]
 */
function getPage(container = '', store = {}, cb = () => {}) {
  import(`routes/${container}`)
    .then(loadRoute(cb, true))
    .catch(errorLoading);
}

/**
 * Error displaying when routing is loaded.
 *
 * @param {any} [err={}]
 */
function errorLoading(err = {}) {
  console.error('Dynamic page loading failed', err);
}

/**
 * Load a page.
 *
 * @param {any} cb
 * @returns
 */
function loadRoute(cb) {
  return (module) => {
    cb(null, module.default);
  };
}