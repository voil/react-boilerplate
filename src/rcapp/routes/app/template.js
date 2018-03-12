/*
 * =============================================================================
 * Project: boilerplate
 * Created Date: 2018-03-12, 09:25:40
 * Author: Przemysław Drzewicki <przemyslaw.drzewicki@gmail.com>
 * =============================================================================
 * Last Modified: 2018-03-12, 09:53:49
 * Modified By: Przemysław Drzewicki
 * =============================================================================
 * Copyright (c) 2018 webonweb
 * =============================================================================
 */

// =============================================================================
// Loading dependencies.
// =============================================================================
import React from 'react';
// =============================================================================
// Load components.
// =============================================================================
import { LocaleProvider } from 'antd';
import OfflinePlatform from 'routes/offline';
import plPL from 'antd/lib/locale-provider/pl_PL';
import { Offline, Online } from 'react-detect-offline';

// =============================================================================
// Export the template.
// =============================================================================
export default component =>
  <LocaleProvider locale={plPL}>
    <div>
      <Online>
        {component.props.children}
      </Online>
      <Offline>
        <OfflinePlatform />
      </Offline>
    </div>
  </LocaleProvider>;