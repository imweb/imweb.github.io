define('node_modules/react/lib/ReactInjection', function(require, exports, module) {

  /**
   * Copyright 2013-present, Facebook, Inc.
   * All rights reserved.
   *
   * This source code is licensed under the BSD-style license found in the
   * LICENSE file in the root directory of this source tree. An additional grant
   * of patent rights can be found in the PATENTS file in the same directory.
   *
   * @providesModule ReactInjection
   */
  
  'use strict';
  
  var DOMProperty = require('node_modules/react/lib/DOMProperty');
  var EventPluginHub = require('node_modules/react/lib/EventPluginHub');
  var EventPluginUtils = require('node_modules/react/lib/EventPluginUtils');
  var ReactComponentEnvironment = require('node_modules/react/lib/ReactComponentEnvironment');
  var ReactClass = require('node_modules/react/lib/ReactClass');
  var ReactEmptyComponent = require('node_modules/react/lib/ReactEmptyComponent');
  var ReactBrowserEventEmitter = require('node_modules/react/lib/ReactBrowserEventEmitter');
  var ReactHostComponent = require('node_modules/react/lib/ReactHostComponent');
  var ReactUpdates = require('node_modules/react/lib/ReactUpdates');
  
  var ReactInjection = {
    Component: ReactComponentEnvironment.injection,
    Class: ReactClass.injection,
    DOMProperty: DOMProperty.injection,
    EmptyComponent: ReactEmptyComponent.injection,
    EventPluginHub: EventPluginHub.injection,
    EventPluginUtils: EventPluginUtils.injection,
    EventEmitter: ReactBrowserEventEmitter.injection,
    HostComponent: ReactHostComponent.injection,
    Updates: ReactUpdates.injection
  };
  
  module.exports = ReactInjection;

});
