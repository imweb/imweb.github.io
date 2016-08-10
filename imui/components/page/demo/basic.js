define('components/page/demo/basic.jsx', function(require, exports, module) {

  'use strict';
  
  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
  
  var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
  
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
  
  function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
  
  var _react = require('node_modules/react/react');
  
  var _react2 = _interopRequireDefault(_react);
  
  var _reactDom = require('node_modules/react-dom/index');
  
  var _reactDom2 = _interopRequireDefault(_reactDom);
  
  var _index = require('components/page/index.jsx');
  
  var _index2 = _interopRequireDefault(_index);
  
  var PageBasicDemo = (function (_React$Component) {
    _inherits(PageBasicDemo, _React$Component);
  
    function PageBasicDemo() {
      _classCallCheck(this, PageBasicDemo);
  
      _get(Object.getPrototypeOf(PageBasicDemo.prototype), 'constructor', this).apply(this, arguments);
    }
  
    _createClass(PageBasicDemo, [{
      key: 'render',
      value: function render() {
        return _react2['default'].createElement(
          'div',
          null,
          _react2['default'].createElement(
            'h3',
            null,
            'size'
          ),
          _react2['default'].createElement(
            'h4',
            null,
            'size="s"'
          ),
          _react2['default'].createElement(_index2['default'], {
            totalPage: 4,
            defaultPage: 3,
            size: 's'
          }),
          _react2['default'].createElement(
            'h4',
            null,
            'size="m" default size'
          ),
          _react2['default'].createElement(_index2['default'], {
            totalPage: 4,
            defaultPage: 4,
            size: 'm'
          }),
          _react2['default'].createElement(
            'h4',
            null,
            'size="l"'
          ),
          _react2['default'].createElement(_index2['default'], {
            totalPage: 3,
            size: 'l'
          }),
          _react2['default'].createElement(
            'h3',
            null,
            'event'
          ),
          _react2['default'].createElement(_index2['default'], {
            totalPage: 3,
            onChange: this.onChange
          }),
          _react2['default'].createElement(
            'h3',
            null,
            'huge number'
          ),
          _react2['default'].createElement(_index2['default'], {
            totalPage: 30
          })
        );
      }
    }, {
      key: 'onChange',
      value: function onChange(goPage, prevPage) {
        window.console.log(goPage, prevPage);
      }
    }]);
  
    return PageBasicDemo;
  })(_react2['default'].Component);
  
  _reactDom2['default'].render(_react2['default'].createElement(PageBasicDemo, null), window.document.getElementById('basic'));

});
