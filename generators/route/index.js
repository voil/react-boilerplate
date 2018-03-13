/*
 * =============================================================================
 * Project: boilerplate
 * Created Date: 2018-03-12, 09:02:23
 * Author: Przemysław Drzewicki <przemyslaw.drzewicki@gmail.com>
 * =============================================================================
 * Last Modified: 2018-03-13, 12:23:24
 * Modified By: Przemysław Drzewicki
 * =============================================================================
 * Copyright (c) 2018 webonweb
 * =============================================================================
 */

// =============================================================================
// Loading dependencies.
// =============================================================================
import template from './template';
import React from 'react';

/**
 * Component class.
 *
 * @class <%= upCaseName %>
 * @extends {React.Component}
 */
class <%= upCaseName %> extends React.Component {

  /**
   * Main rendering function.
   *
   * @memberof <%= upCaseName %>
   */
  render = () => template(this);
}

// =============================================================================
// Export a component.
// =============================================================================
export default <%= upCaseName %>;