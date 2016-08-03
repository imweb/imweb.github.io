define('components/tab/index.jsx', function(require, exports, module) {

  // @require 'components/tab/style/index.scss'
  
  'use strict';
  
  Object.defineProperty(exports, '__esModule', {
    value: true
  });
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
  
  var _libTab = require('components/tab/lib/Tab.jsx');
  
  var _libTab2 = _interopRequireDefault(_libTab);
  
  var _libTabPanel = require('components/tab/lib/TabPanel.jsx');
  
  var _libTabPanel2 = _interopRequireDefault(_libTabPanel);
  
  _libTab2['default'].TabPanel = _libTabPanel2['default'];
  
  exports['default'] = _libTab2['default'];
  exports.TabPanel = _libTabPanel2['default'];

});
