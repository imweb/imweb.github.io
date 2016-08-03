define('node_modules/react/lib/ReactInstrumentation', function(require, exports, module) {

  /**
   * Copyright 2016-present, Facebook, Inc.
   * All rights reserved.
   *
   * This source code is licensed under the BSD-style license found in the
   * LICENSE file in the root directory of this source tree. An additional grant
   * of patent rights can be found in the PATENTS file in the same directory.
   *
   * @providesModule ReactInstrumentation
   */
  
  'use strict';
  
  var debugTool = null;
  
  if ('development' !== 'production') {
    var ReactDebugTool = require('node_modules/react/lib/ReactDebugTool');
    debugTool = ReactDebugTool;
  }
  
  module.exports = { debugTool: debugTool };

});
