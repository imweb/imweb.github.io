define('components/tab/lib/TabNav.jsx', function(require, exports, module) {

  /**
   * imui.Tab.TabNav
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
  
  var TabNav = (function (_React$Component) {
    _inherits(TabNav, _React$Component);
  
    function TabNav(props) {
      _classCallCheck(this, TabNav);
  
      _get(Object.getPrototypeOf(TabNav.prototype), 'constructor', this).call(this, props);
  
      this.state = {
        active: props.active
      };
      this.onTabClick = this.onTabClick.bind(this);
    }
  
    _createClass(TabNav, [{
      key: 'onTabClick',
      value: function onTabClick(next) {
        var active = this.state.active;
        var _props = this.props;
        var onTabClick = _props.onTabClick;
        var onActive = _props.onActive;
        var onBeforeActive = _props.onBeforeActive;
  
        onTabClick(next, +active);
  
        if (next !== +active && onBeforeActive(next, +active) !== false) {
          this.setState({
            active: next
          });
          onActive(next, +active);
        }
      }
    }, {
      key: 'createTabs',
      value: function createTabs(panels, active) {
        var _this = this;
  
        var tabs = [];
        // const that = this;
  
        panels.forEach(function (panel, index) {
          var cls = (0, _classnames3['default'])({
            active: index === +active
          });
          var tab = panel.props.tab;
  
          tabs.push(_react2['default'].createElement(
            'a',
            {
              key: index,
              onClick: function () {
                return _this.onTabClick(index, tab);
              },
              className: cls
            },
            tab
          ));
        });
  
        return tabs;
      }
    }, {
      key: 'render',
      value: function render() {
        var _props2 = this.props;
        var panels = _props2.panels;
        var tabType = _props2.tabType;
        var active = this.state.active;
  
        var tabs = this.createTabs(panels, active);
        var cls = (0, _classnames3['default'])(_defineProperty({
          'im-tab-hd': 1
        }, 'im-tab-hd--' + tabType, 1));
  
        return _react2['default'].createElement(
          'div',
          { className: cls },
          tabs
        );
      }
    }]);
  
    return TabNav;
  })(_react2['default'].Component);
  
  TabNav.propTypes = {};
  
  exports['default'] = TabNav;
  module.exports = exports['default'];

});
