/*
 * =============================================================================
 * Project: boilerplate
 * Created Date: 2018-03-12, 09:37:17
 * Author: Przemysław Drzewicki <przemyslaw.drzewicki@gmail.com>
 * =============================================================================
 * Last Modified: 2018-03-12, 09:53:50
 * Modified By: Przemysław Drzewicki
 * =============================================================================
 * Copyright (c) 2018 webonweb
 * =============================================================================
 */

//==============================================================================
// Loading dependencies.
//==============================================================================
import React from "react";
import template from "./template";

/**
 * Component class.
 * 
 * @class NotFound
 * @extends {Component}
 */
class NotFound extends React.Component {
  /**
   * Main rendering function.
   *
   * @memberof NotFound
   */
  render = () => template(this);
}

// =============================================================================
// Export component.
// =============================================================================
export default NotFound;