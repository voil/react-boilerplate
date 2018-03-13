/*
 * =============================================================================
 * Project: boilerplate
 * Created Date: 2018-03-12, 09:22:51
 * Author: Przemysław Drzewicki <przemyslaw.drzewicki@gmail.com>
 * =============================================================================
 * Last Modified: 2018-03-13, 14:16:10
 * Modified By: Przemysław Drzewicki
 * =============================================================================
 * Copyright (c) 2018 webonweb
 * =============================================================================
 */
import { combineReducers } from "redux";
import { routerReducer } from "react-router-redux";

var reducer = {
  routing: routerReducer
};

export default combineReducers(reducer);