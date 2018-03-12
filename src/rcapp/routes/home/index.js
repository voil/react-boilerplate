/*
 * =============================================================================
 * Project: boilerplate
 * Created Date: 2018-03-12, 09:38:31
 * Author: Przemysław Drzewicki <przemyslaw.drzewicki@gmail.com>
 * =============================================================================
 * Last Modified: 2018-03-12, 09:53:48
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
 * @class Home
 * @extends {React.Component}
 */
class Home extends React.Component {
 /**
  * Main rendering function.
  *
  * @memberof Home
  */
  render = () => template(this);
}

// =============================================================================
// Export a component.
// =============================================================================
export default Home;