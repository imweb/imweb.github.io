define('components/dialog/src/DialogWrap.jsx', function(require, exports, module) {

  /**
   * imui.DialogWrap
   * @author jero
   * @date 2016-07-28
   *
   */
  
  'use strict';
  
  Object.defineProperty(exports, '__esModule', {
    value: true
  });
  
  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
  
  var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
  
  function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
  
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
  
  function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
  
  var _react = require('node_modules/react/react');
  
  var _react2 = _interopRequireDefault(_react);
  
  var _reactDom = require('node_modules/react-dom/index');
  
  var _reactDom2 = _interopRequireDefault(_reactDom);
  
  var _Dialog = require('components/dialog/src/Dialog.jsx');
  
  var _Dialog2 = _interopRequireDefault(_Dialog);
  
  var renderSubtreeIntoContainer = _reactDom2['default'].unstable_renderSubtreeIntoContainer;
  
  var DialogWrap = (function (_Component) {
    _inherits(DialogWrap, _Component);
  
    function DialogWrap(props) {
      _classCallCheck(this, DialogWrap);
  
      _get(Object.getPrototypeOf(DialogWrap.prototype), 'constructor', this).call(this, props);
  
      this.state = {};
    }
  
    _createClass(DialogWrap, [{
      key: 'componentDidMount',
      value: function componentDidMount() {
        var body = document.body;
        var container = this.container = document.createElement('div');
  
        body.appendChild(container);
  
        this.renderDialog(this.props);
      }
    }, {
      key: 'componentWillReceiveProps',
      value: function componentWillReceiveProps(props) {
        this.renderDialog(props);
      }
    }, {
      key: 'renderDialog',
      value: function renderDialog(p) {
        var children = p.children;
  
        var props = _objectWithoutProperties(p, ['children']);
  
        renderSubtreeIntoContainer(this, _react2['default'].createElement(
          _Dialog2['default'],
          props,
          children
        ), this.container);
      }
    }, {
      key: 'render',
      value: function render() {
        return null;
      }
    }]);
  
    return DialogWrap;
  })(_react.Component);
  
  _Dialog2['default'].propTypes = {
    mask: _react.PropTypes.bool,
    visible: _react.PropTypes.bool,
    width: _react.PropTypes.number,
    onClose: _react.PropTypes.func,
    onBeforeClose: _react.PropTypes.func,
    title: _react.PropTypes.node,
    zIndex: _react.PropTypes.number,
    button: _react.PropTypes.arrayOf(_react.PropTypes.element),
    closeable: _react.PropTypes.bool
  };
  
  _Dialog2['default'].defaultProps = {
    mask: true, // 是否遮罩
    visible: false, // 是否可见
    width: 600, // 宽度
    onClose: function onClose() {}, // 关闭之后的回调
    onBeforeClose: function onBeforeClose() {}, // 关闭之前的回调，返回 false 可以阻止关闭
    title: '', // 标题，可为空
    zIndex: 1050,
    button: [], // 按钮，请使用 imui.Button
    closeable: true // 是否显示右上角的 x
  };
  
  exports['default'] = DialogWrap;
  module.exports = exports['default'];

});
