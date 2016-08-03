define('components/button/index.jsx', function(require, exports, module) {

  // @require 'components/button/style/index.scss'
  
  'use strict';
  
  Object.defineProperty(exports, '__esModule', {
    value: true
  });
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
  
  var _libButton = require('components/button/lib/Button.jsx');
  
  var _libButton2 = _interopRequireDefault(_libButton);
  
  exports['default'] = _libButton2['default'];
  module.exports = exports['default'];

});
