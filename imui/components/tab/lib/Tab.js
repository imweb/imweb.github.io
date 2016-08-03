define('components/tab/lib/Tab.jsx', function(require, exports, module) {

  /**
   * imui.Tab
   * @author jero
   * @date 2016-07-12
   *
   * @todo prefix class
   */
  
  'use strict';
  
  Object.defineProperty(exports, '__esModule', {
    value: true
  });
  
  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
  
  var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
  
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
  
  function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
  
  var _react = require('node_modules/react/react');
  
  var _react2 = _interopRequireDefault(_react);
  
  var _TabNav = require('components/tab/lib/TabNav.jsx');
  
  var _TabNav2 = _interopRequireDefault(_TabNav);
  
  var Tab = (function (_React$Component) {
    _inherits(Tab, _React$Component);
  
    function Tab(props) {
      _classCallCheck(this, Tab);
  
      _get(Object.getPrototypeOf(Tab.prototype), 'constructor', this).call(this, props);
  
      this.state = {
        active: props.active
      };
  
      this.getActivePanel = this.getActivePanel.bind(this);
      this.onActive = this.onActive.bind(this);
    }
  
    _createClass(Tab, [{
      key: 'getActivePanel',
      value: function getActivePanel() {
        var _props = this.props;
        var children = _props.children;
        var prefixCls = _props.prefixCls;
        var active = this.state.active;
  
        var newChild = [];
  
        _react2['default'].Children.forEach(children, function (child, index) {
          if (+active === index) {
            newChild.push(_react2['default'].cloneElement(child, {
              prefixCls: prefixCls,
              key: Math.random()
            }));
          }
        });
  
        return newChild;
      }
    }, {
      key: 'onActive',
      value: function onActive(current, prev) {
        this.setState({
          active: current
        });
        this.props.onActive(current, prev);
      }
    }, {
      key: 'render',
      value: function render() {
        var _props2 = this.props;
        var children = _props2.children;
        var tabType = _props2.tabType;
        var onTabClick = _props2.onTabClick;
        var onBeforeActive = _props2.onBeforeActive;
        var active = this.state.active;
  
        var activePanel = this.getActivePanel();
  
        return _react2['default'].createElement(
          'div',
          { className: 'im-tab' },
          _react2['default'].createElement(_TabNav2['default'], {
            onTabClick: onTabClick,
            onActive: this.onActive,
            onBeforeActive: onBeforeActive,
  
            panels: children,
            active: active,
            tabType: tabType
          }),
          _react2['default'].createElement(
            'div',
            { className: 'im-tab-bd' },
            activePanel
          )
        );
      }
    }]);
  
    return Tab;
  })(_react2['default'].Component);
  
  Tab.propTypes = {
    prefixCls: _react.PropTypes.string,
    active: _react.PropTypes.string,
    onTabClick: _react.PropTypes.func,
    onActive: _react.PropTypes.func,
    onBeforeActive: _react.PropTypes.func,
    tabType: _react.PropTypes.oneOf(['bottom', 'border', 'top'])
  };
  
  Tab.defaultProps = {
    prefixCls: 'im-tab',
    active: '0',
    tabType: 'bottom', // bottom | border | top
    onTabClick: function onTabClick() {},
    onActive: function onActive() {},
    onBeforeActive: function onBeforeActive() {}
  };
  
  exports['default'] = Tab;
  module.exports = exports['default'];

});
