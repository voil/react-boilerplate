/*
 * =============================================================================
 * Project: boilerplate
 * Created Date: 2018-03-12, 09:28:52
 * Author: Przemysław Drzewicki <przemyslaw.drzewicki@gmail.com>
 * =============================================================================
 * Last Modified: 2018-03-12, 09:53:52
 * Modified By: Przemysław Drzewicki
 * =============================================================================
 * Copyright (c) 2018 webonweb
 * =============================================================================
 */

// =============================================================================
// Loading dependencies.
// =============================================================================
import React from "react";
import template from "./template";

/**
 * Component class.
 *  
 * @class Offline
 * @extends {React.Component}
 */
class Offline extends React.Component {
 /**
  * Main rendering function.
  *
  * @memberof Offline
  */
  render = () => template(this);
}

// =============================================================================
// Export a component.
// =============================================================================
export default Offline;