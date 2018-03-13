/*
 * =============================================================================
 * Project: boilerplate
 * Created Date: 2018-03-12, 09:02:23
 * Author: Przemysław Drzewicki <przemyslaw.drzewicki@gmail.com>
 * =============================================================================
 * Last Modified: 2018-03-13, 14:17:41
 * Modified By: Przemysław Drzewicki
 * =============================================================================
 * Copyright (c) 2018 webonweb
 * =============================================================================
 */
import React from 'react';
import template from './template';

/**
 * Component class.
 *
 * @class <%= upCaseName %>
 * @extends {React.Component}
 */
export default class <%= upCaseName %> extends React.Component {

  /**
   * Main rendering function.
   *
   * @memberof <%= upCaseName %>
   */
  render = () => template(this);
}