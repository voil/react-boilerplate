/*
 * =============================================================================
 * Project: boilerplate
 * Created Date: 2018-03-12, 09:25:33
 * Author: Przemysław Drzewicki <przemyslaw.drzewicki@gmail.com>
 * =============================================================================
 * Last Modified: 2018-03-12, 09:53:47
 * Modified By: Przemysław Drzewicki
 * =============================================================================
 * Copyright (c) 2018 webonweb
 * =============================================================================
 */

// =============================================================================
// Loading dependencies.
// =============================================================================
import React from 'react';
import template from './template';

/**
 * Component class.
 *
 * @class App
 * @extends {React.Component}
 */
class App extends React.Component {

  /**
   * Main rendering function.
   *
   * @memberof App
   */
  render = () => template(this);
}

// =============================================================================
// Export a component.
// =============================================================================
export default App;