/*
 * =============================================================================
 * Project: boilerplate
 * Created Date: 2018-03-12, 09:25:33
 * Author: Przemysław Drzewicki <przemyslaw.drzewicki@gmail.com>
 * =============================================================================
 * Last Modified: 2018-03-13, 12:17:20
 * Modified By: Przemysław Drzewicki
 * =============================================================================
 * Copyright (c) 2018 webonweb
 * =============================================================================
 */

// =============================================================================
// Loading dependencies.
// =============================================================================
import React from 'react';
import PropTypes from 'prop-types';
// =============================================================================
// Load components.
// =============================================================================
import { LocaleProvider } from 'antd';
import OfflinePlatform from 'routes/offline';
import plPL from 'antd/lib/locale-provider/pl_PL';
import { Offline, Online } from 'react-detect-offline';

const App = props => 
  (<LocaleProvider locale={plPL}>
    <div>
      <Online>
        {props.children}
      </Online>
      <Offline>
        <OfflinePlatform />
      </Offline>
    </div>
  </LocaleProvider>)

App.propTypes = {
  children: PropTypes.any.isRequired
}

export default App;
