define('components/dialog/index.jsx', function(require, exports, module) {

  // @require 'components/dialog/style/index.scss'
  
  'use strict';
  
  Object.defineProperty(exports, '__esModule', {
    value: true
  });
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
  
  var _srcDialogWrap = require('components/dialog/src/DialogWrap.jsx');
  
  var _srcDialogWrap2 = _interopRequireDefault(_srcDialogWrap);
  
  exports['default'] = _srcDialogWrap2['default'];
  module.exports = exports['default'];

});
