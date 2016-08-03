define('components/tab/lib/TabPanel.jsx', function(require, exports, module) {

  /**
   * imui.Tab.TabPane
   * @author jero
   * @date 2016-07-21
   */
  
  'use strict';
  
  Object.defineProperty(exports, '__esModule', {
    value: true
  });
  
  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
  
  var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
  
  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
  
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
  
  function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
  
  var _react = require('node_modules/react/react');
  
  var _react2 = _interopRequireDefault(_react);
  
  var _classnames2 = require('node_modules/classnames/index');
  
  var _classnames3 = _interopRequireDefault(_classnames2);
  
  var TabPanel = (function (_React$Component) {
    _inherits(TabPanel, _React$Component);
  
    function TabPanel(props) {
      _classCallCheck(this, TabPanel);
  
      _get(Object.getPrototypeOf(TabPanel.prototype), 'constructor', this).call(this, props);
  
      this.state = {};
    }
  
    // TabPanel.propTypes = {
    //   active: PropTypes.number
    // };
    //
    // TabPanel.props = {
    //   active: 0
    // };
  
    _createClass(TabPanel, [{
      key: 'render',
      value: function render() {
        var props = this.props;
        // this.isActived = this.isActived || props.active;
        //
        // if (!this.isActived) {
        //   return null;
        // }
  
        var prefixCls = props.prefixCls + '-panel';
        var cls = (0, _classnames3['default'])(_defineProperty({}, prefixCls, 1));
        return _react2['default'].createElement(
          'div',
          {
            className: cls
          },
          props.children
        );
      }
    }]);
  
    return TabPanel;
  })(_react2['default'].Component);
  
  exports['default'] = TabPanel;
  module.exports = exports['default'];
  
  // [`${prefixCls}-hidden`]: !props.active,

});
