/*
 * =============================================================================
 * Project: boilerplate
 * Created Date: 2018-03-12, 09:23:58
 * Author: Przemysław Drzewicki <przemyslaw.drzewicki@gmail.com>
 * =============================================================================
 * Last Modified: 2018-03-13, 14:16:21
 * Modified By: Przemysław Drzewicki
 * =============================================================================
 * Copyright (c) 2018 webonweb
 * =============================================================================
 */

/**
 * The middleware function for handling ajax requests.
 * 
 * @param {any} [client={}] 
 * @returns 
 */
export default function clientMiddleware( client = {} ){
  return ({ dispatch, getState }) => {
    return next => (action) => {
      if(typeof action == 'function'){
        return action(dispatch, getState);
      }
      const { promise, types, ...rest } = action;
      if (!promise) {
        return next(action);
      }
      const [REQUEST, SUCCESS, FAILURE] = types;

      next({ ...rest, type: REQUEST });

      client.dispatch = dispatch;
      const actionPromise = promise(client);
      actionPromise.then(
        result => next({ ...rest, result, type: SUCCESS }),
        error => next({ ...rest, error, type: FAILURE })
      ).catch((error)=> {
        console.error('MIDDLEWARE ERROR:', error);
        next({ ...rest, error, type: FAILURE });
      });

      return actionPromise;
    };
  };
}