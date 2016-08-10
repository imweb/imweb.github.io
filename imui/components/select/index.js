define('components/select/index.jsx', function(require, exports, module) {

  // @require 'components/select/style/index.scss'
  'use strict';
  
  Object.defineProperty(exports, '__esModule', {
    value: true
  });
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
  
  var _libSelect = require('components/select/lib/Select.jsx');
  
  var _libSelect2 = _interopRequireDefault(_libSelect);
  
  exports['default'] = _libSelect2['default'];
  module.exports = exports['default'];

});
