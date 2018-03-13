/*
 * =============================================================================
 * Project: boilerplate
 * Created Date: 2018-03-12, 09:00:52
 * Author: Przemysław Drzewicki <przemyslaw.drzewicki@gmail.com>
 * =============================================================================
 * Last Modified: 2018-03-13, 12:23:15
 * Modified By: Przemysław Drzewicki
 * =============================================================================
 * Copyright (c) 2018 webonweb
 * =============================================================================
 */

// =============================================================================
// Loading dependencies.
// =============================================================================
import React from 'react';
import './style.sass';
import template from './template';

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