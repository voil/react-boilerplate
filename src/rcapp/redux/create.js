/*
 * =============================================================================
 * Project: boilerplate
 * Created Date: 2018-03-12, 09:21:37
 * Author: Przemysław Drzewicki <przemyslaw.drzewicki@gmail.com>
 * =============================================================================
 * Last Modified: 2018-03-12, 09:53:44
 * Modified By: Przemysław Drzewicki
 * =============================================================================
 * Copyright (c) 2018 webonweb
 * =============================================================================
 */

// =============================================================================
// Loading dependencies.
// =============================================================================
import reducer from "./actions/reducer";
import { createStore, applyMiddleware, compose } from "redux";
import createMiddleware from "./middlewares/client.middleware";

/**
 * Preparing the store.
 * 
 * @param {any} [client={}] 
 * @returns 
 */
function prepareStore(client = {}) {
  let middlewares = [createMiddleware(client)];
  return createStore(reducer, compose(applyMiddleware(...middlewares)));
}

// =============================================================================
// Export store.
// =============================================================================
export default prepareStore;