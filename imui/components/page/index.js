define('components/page/index.jsx', function(require, exports, module) {

  /**
   * @author Halwu
   */
  // @require 'components/page/style/index.scss'
  'use strict';
  
  Object.defineProperty(exports, '__esModule', {
    value: true
  });
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
  
  var _libPage = require('components/page/lib/Page.jsx');
  
  var _libPage2 = _interopRequireDefault(_libPage);
  
  exports['default'] = _libPage2['default'];
  module.exports = exports['default'];

});
