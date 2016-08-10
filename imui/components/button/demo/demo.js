define('components/button/demo/demo.jsx', function(require, exports, module) {

  // @require 'components/style/reset.scss'
  
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
  
  var _index = require('components/button/index.jsx');
  
  var _index2 = _interopRequireDefault(_index);
  
  var _iconIndex = require('components/icon/index.jsx');
  
  var _iconIndex2 = _interopRequireDefault(_iconIndex);
  
  var Demo = (function (_React$Component) {
    _inherits(Demo, _React$Component);
  
    function Demo() {
      _classCallCheck(this, Demo);
  
      _get(Object.getPrototypeOf(Demo.prototype), 'constructor', this).apply(this, arguments);
    }
  
    _createClass(Demo, [{
      key: 'testClick',
      value: function testClick() {
        window.console.log('testClick');
      }
    }, {
      key: 'clickHandler',
      value: function clickHandler() {
        console.log(123);
      }
    }, {
      key: 'render',
      value: function render() {
        var iconStyle = {
          fontSize: 22
        };
  
        return _react2['default'].createElement(
          'div',
          null,
          _react2['default'].createElement(
            'div',
            null,
            _react2['default'].createElement(
              'h2',
              null,
              '默认配色按钮'
            ),
            _react2['default'].createElement(
              _index2['default'],
              { size: 's' },
              'IMUI'
            ),
            _react2['default'].createElement(
              _index2['default'],
              null,
              'IMUI'
            ),
            _react2['default'].createElement(
              _index2['default'],
              { size: 'l' },
              'IMUI'
            ),
            _react2['default'].createElement(
              _index2['default'],
              { size: 'l', disabled: true, onClick: this.clickHandler },
              'IMUI'
            )
          ),
          _react2['default'].createElement(
            'div',
            null,
            _react2['default'].createElement(
              'h2',
              null,
              'outline配色按钮'
            ),
            _react2['default'].createElement(
              _index2['default'],
              { color: 'outline', size: 's' },
              'IMUI'
            ),
            _react2['default'].createElement(
              _index2['default'],
              { color: 'outline' },
              'IMUI'
            ),
            _react2['default'].createElement(
              _index2['default'],
              { color: 'outline', size: 'l' },
              'IMUI'
            ),
            _react2['default'].createElement(
              _index2['default'],
              { color: 'outline', disabled: true },
              'IMUI'
            )
          ),
          _react2['default'].createElement(
            'div',
            null,
            _react2['default'].createElement(
              'h2',
              null,
              'primary配色按钮'
            ),
            _react2['default'].createElement(
              _index2['default'],
              { color: 'primary', size: 's' },
              'IMUI'
            ),
            _react2['default'].createElement(
              _index2['default'],
              { color: 'primary' },
              'IMUI'
            ),
            _react2['default'].createElement(
              _index2['default'],
              { color: 'primary', size: 'l' },
              'IMUI'
            ),
            _react2['default'].createElement(
              _index2['default'],
              { color: 'primary', disabled: true },
              'IMUI'
            )
          ),
          _react2['default'].createElement(
            'div',
            null,
            _react2['default'].createElement(
              'h2',
              null,
              'weak配色按钮'
            ),
            _react2['default'].createElement(
              _index2['default'],
              { color: 'weak', size: 's' },
              'IMUI'
            ),
            _react2['default'].createElement(
              _index2['default'],
              { color: 'weak' },
              'IMUI'
            ),
            _react2['default'].createElement(
              _index2['default'],
              { color: 'weak', size: 'l' },
              'IMUI'
            ),
            _react2['default'].createElement(
              _index2['default'],
              { color: 'weak', disabled: true },
              'IMUI'
            )
          ),
          _react2['default'].createElement(
            'div',
            null,
            _react2['default'].createElement(
              'h2',
              null,
              '包含Icon的按钮'
            ),
            _react2['default'].createElement(
              _index2['default'],
              { onClick: this.testClick },
              _react2['default'].createElement(_iconIndex2['default'], { type: 'weixin', style: iconStyle })
            ),
            _react2['default'].createElement(
              _index2['default'],
              null,
              _react2['default'].createElement(_iconIndex2['default'], { type: 'weixin' }),
              _react2['default'].createElement(
                'span',
                null,
                '微信'
              )
            ),
            _react2['default'].createElement(
              _index2['default'],
              null,
              _react2['default'].createElement(
                'span',
                null,
                '微信'
              ),
              _react2['default'].createElement(_iconIndex2['default'], { type: 'weixin' })
            )
          ),
          _react2['default'].createElement(
            'div',
            null,
            _react2['default'].createElement(
              'h2',
              null,
              '有链接的按钮'
            ),
            _react2['default'].createElement(
              _index2['default'],
              { href: '//ke.qq.com', disabled: true },
              _react2['default'].createElement(_iconIndex2['default'], { type: 'weixin', style: iconStyle })
            ),
            _react2['default'].createElement(
              _index2['default'],
              { href: '//ke.qq.com', target: '_blank' },
              _react2['default'].createElement(_iconIndex2['default'], { type: 'weixin', style: iconStyle })
            )
          )
        );
      }
    }]);
  
    return Demo;
  })(_react2['default'].Component);
  
  _reactDom2['default'].render(_react2['default'].createElement(Demo, null), document.getElementById('demo'));

});
