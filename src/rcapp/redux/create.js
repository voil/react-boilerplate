/*
 * =============================================================================
 * Project: boilerplate
 * Created Date: 2018-03-12, 09:21:37
 * Author: Przemysław Drzewicki <przemyslaw.drzewicki@gmail.com>
 * =============================================================================
 * Last Modified: 2018-03-13, 11:09:32
 * Modified By: Przemysław Drzewicki
 * =============================================================================
 * Copyright (c) 2018 webonweb
 * =============================================================================
 */

// =============================================================================
// Loading dependencies.
// =============================================================================
import { createStore, applyMiddleware, compose } from "redux";
import reducer from "./actions/reducer";
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