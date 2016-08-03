define('components/icon/demo/demo.jsx', function(require, exports, module) {

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
  
  var _index = require('components/icon/index.jsx');
  
  var _index2 = _interopRequireDefault(_index);
  
  var Demo = (function (_React$Component) {
    _inherits(Demo, _React$Component);
  
    function Demo() {
      _classCallCheck(this, Demo);
  
      _get(Object.getPrototypeOf(Demo.prototype), 'constructor', this).apply(this, arguments);
    }
  
    _createClass(Demo, [{
      key: 'Constructor',
      value: function Constructor() {}
    }, {
      key: 'render',
      value: function render() {
        var iconStyle = {
          fontSize: 44
        };
        return _react2['default'].createElement(
          'div',
          null,
          _react2['default'].createElement(
            'ul',
            null,
            _react2['default'].createElement(
              'li',
              null,
              _react2['default'].createElement(
                'span',
                null,
                'type:add'
              ),
              _react2['default'].createElement(_index2['default'], { type: 'add' })
            ),
            _react2['default'].createElement(
              'li',
              null,
              _react2['default'].createElement(
                'span',
                null,
                'type:alert'
              ),
              _react2['default'].createElement(_index2['default'], { type: 'alert' })
            ),
            _react2['default'].createElement(
              'li',
              null,
              _react2['default'].createElement(
                'span',
                null,
                'type:arrow-bottom'
              ),
              _react2['default'].createElement(_index2['default'], { type: 'arrow-bottom' })
            ),
            _react2['default'].createElement(
              'li',
              null,
              _react2['default'].createElement(
                'span',
                null,
                'type:arrow-top'
              ),
              _react2['default'].createElement(_index2['default'], { type: 'arrow-top' })
            ),
            _react2['default'].createElement(
              'li',
              null,
              _react2['default'].createElement(
                'span',
                null,
                'type:calendar'
              ),
              _react2['default'].createElement(_index2['default'], { type: 'calendar' })
            ),
            _react2['default'].createElement(
              'li',
              null,
              _react2['default'].createElement(
                'span',
                null,
                'type:clone'
              ),
              _react2['default'].createElement(_index2['default'], { type: 'clone' })
            ),
            _react2['default'].createElement(
              'li',
              null,
              _react2['default'].createElement(
                'span',
                null,
                'type:close'
              ),
              _react2['default'].createElement(_index2['default'], { type: 'close' })
            ),
            _react2['default'].createElement(
              'li',
              null,
              _react2['default'].createElement(
                'span',
                null,
                'type:comment'
              ),
              _react2['default'].createElement(_index2['default'], { type: 'comment' })
            ),
            _react2['default'].createElement(
              'li',
              null,
              _react2['default'].createElement(
                'span',
                null,
                'type:course-data'
              ),
              _react2['default'].createElement(_index2['default'], { type: 'course-data' })
            ),
            _react2['default'].createElement(
              'li',
              null,
              _react2['default'].createElement(
                'span',
                null,
                'type:course-live'
              ),
              _react2['default'].createElement(_index2['default'], { type: 'course-live' })
            ),
            _react2['default'].createElement(
              'li',
              null,
              _react2['default'].createElement(
                'span',
                null,
                'type:course-q-a'
              ),
              _react2['default'].createElement(_index2['default'], { type: 'course-q-a' })
            ),
            _react2['default'].createElement(
              'li',
              null,
              _react2['default'].createElement(
                'span',
                null,
                'type:course-record'
              ),
              _react2['default'].createElement(_index2['default'], { type: 'course-record' })
            ),
            _react2['default'].createElement(
              'li',
              null,
              _react2['default'].createElement(
                'span',
                null,
                'type:course-test'
              ),
              _react2['default'].createElement(_index2['default'], { type: 'course-test' })
            ),
            _react2['default'].createElement(
              'li',
              null,
              _react2['default'].createElement(
                'span',
                null,
                'type:delete'
              ),
              _react2['default'].createElement(_index2['default'], { type: 'delete' })
            ),
            _react2['default'].createElement(
              'li',
              null,
              _react2['default'].createElement(
                'span',
                null,
                'type:download'
              ),
              _react2['default'].createElement(_index2['default'], { type: 'download' })
            ),
            _react2['default'].createElement(
              'li',
              null,
              _react2['default'].createElement(
                'span',
                null,
                'type:edit'
              ),
              _react2['default'].createElement(_index2['default'], { type: 'edit' })
            ),
            _react2['default'].createElement(
              'li',
              null,
              _react2['default'].createElement(
                'span',
                null,
                'type:group'
              ),
              _react2['default'].createElement(_index2['default'], { type: 'group' })
            ),
            _react2['default'].createElement(
              'li',
              null,
              _react2['default'].createElement(
                'span',
                null,
                'type:heart'
              ),
              _react2['default'].createElement(_index2['default'], { type: 'heart' })
            ),
            _react2['default'].createElement(
              'li',
              null,
              _react2['default'].createElement(
                'span',
                null,
                'type:home'
              ),
              _react2['default'].createElement(_index2['default'], { type: 'home' })
            ),
            _react2['default'].createElement(
              'li',
              null,
              _react2['default'].createElement(
                'span',
                null,
                'type:info'
              ),
              _react2['default'].createElement(_index2['default'], { type: 'info' })
            ),
            _react2['default'].createElement(
              'li',
              null,
              _react2['default'].createElement(
                'span',
                null,
                'type:insert'
              ),
              _react2['default'].createElement(_index2['default'], { type: 'insert' })
            ),
            _react2['default'].createElement(
              'li',
              null,
              _react2['default'].createElement(
                'span',
                null,
                'type:list-dot'
              ),
              _react2['default'].createElement(_index2['default'], { type: 'list-dot' })
            ),
            _react2['default'].createElement(
              'li',
              null,
              _react2['default'].createElement(
                'span',
                null,
                'type:logo'
              ),
              _react2['default'].createElement(_index2['default'], { type: 'logo' })
            ),
            _react2['default'].createElement(
              'li',
              null,
              _react2['default'].createElement(
                'span',
                null,
                'type:phone'
              ),
              _react2['default'].createElement(_index2['default'], { type: 'phone' })
            ),
            _react2['default'].createElement(
              'li',
              null,
              _react2['default'].createElement(
                'span',
                null,
                'type:play'
              ),
              _react2['default'].createElement(_index2['default'], { type: 'play' })
            ),
            _react2['default'].createElement(
              'li',
              null,
              _react2['default'].createElement(
                'span',
                null,
                'type:qq-border'
              ),
              _react2['default'].createElement(_index2['default'], { type: 'qq-border' })
            ),
            _react2['default'].createElement(
              'li',
              null,
              _react2['default'].createElement(
                'span',
                null,
                'type:qq'
              ),
              _react2['default'].createElement(_index2['default'], { type: 'qq' })
            ),
            _react2['default'].createElement(
              'li',
              null,
              _react2['default'].createElement(
                'span',
                null,
                'type:qr-code'
              ),
              _react2['default'].createElement(_index2['default'], { type: 'qr-code' })
            ),
            _react2['default'].createElement(
              'li',
              null,
              _react2['default'].createElement(
                'span',
                null,
                'type:question'
              ),
              _react2['default'].createElement(_index2['default'], { type: 'question' })
            ),
            _react2['default'].createElement(
              'li',
              null,
              _react2['default'].createElement(
                'span',
                null,
                'type:right'
              ),
              _react2['default'].createElement(_index2['default'], { type: 'right' })
            ),
            _react2['default'].createElement(
              'li',
              null,
              _react2['default'].createElement(
                'span',
                null,
                'type:share'
              ),
              _react2['default'].createElement(_index2['default'], { type: 'share' })
            ),
            _react2['default'].createElement(
              'li',
              null,
              _react2['default'].createElement(
                'span',
                null,
                'type:star-border'
              ),
              _react2['default'].createElement(_index2['default'], { type: 'star-border' })
            ),
            _react2['default'].createElement(
              'li',
              null,
              _react2['default'].createElement(
                'span',
                null,
                'type:star'
              ),
              _react2['default'].createElement(_index2['default'], { type: 'star' })
            ),
            _react2['default'].createElement(
              'li',
              null,
              _react2['default'].createElement(
                'span',
                null,
                'type:success'
              ),
              _react2['default'].createElement(_index2['default'], { type: 'success' })
            ),
            _react2['default'].createElement(
              'li',
              null,
              _react2['default'].createElement(
                'span',
                null,
                'type:tel'
              ),
              _react2['default'].createElement(_index2['default'], { type: 'tel' })
            ),
            _react2['default'].createElement(
              'li',
              null,
              _react2['default'].createElement(
                'span',
                null,
                'type:time'
              ),
              _react2['default'].createElement(_index2['default'], { type: 'time' })
            ),
            _react2['default'].createElement(
              'li',
              null,
              _react2['default'].createElement(
                'span',
                null,
                'type:to-top'
              ),
              _react2['default'].createElement(_index2['default'], { type: 'to-top' })
            ),
            _react2['default'].createElement(
              'li',
              null,
              _react2['default'].createElement(
                'span',
                null,
                'type:tupu'
              ),
              _react2['default'].createElement(_index2['default'], { type: 'tupu' })
            ),
            _react2['default'].createElement(
              'li',
              null,
              _react2['default'].createElement(
                'span',
                null,
                'type:upload'
              ),
              _react2['default'].createElement(_index2['default'], { type: 'upload' })
            ),
            _react2['default'].createElement(
              'li',
              null,
              _react2['default'].createElement(
                'span',
                null,
                'type:user-border'
              ),
              _react2['default'].createElement(_index2['default'], { type: 'user-border' })
            ),
            _react2['default'].createElement(
              'li',
              null,
              _react2['default'].createElement(
                'span',
                null,
                'type:user-group-border'
              ),
              _react2['default'].createElement(_index2['default'], { type: 'user-group-border' })
            ),
            _react2['default'].createElement(
              'li',
              null,
              _react2['default'].createElement(
                'span',
                null,
                'type:user-group'
              ),
              _react2['default'].createElement(_index2['default'], { type: 'user-group' })
            ),
            _react2['default'].createElement(
              'li',
              null,
              _react2['default'].createElement(
                'span',
                null,
                'type:user'
              ),
              _react2['default'].createElement(_index2['default'], { type: 'user' })
            ),
            _react2['default'].createElement(
              'li',
              null,
              _react2['default'].createElement(
                'span',
                null,
                'type:v-bottom'
              ),
              _react2['default'].createElement(_index2['default'], { type: 'v-bottom' })
            ),
            _react2['default'].createElement(
              'li',
              null,
              _react2['default'].createElement(
                'span',
                null,
                'type:v-left'
              ),
              _react2['default'].createElement(_index2['default'], { type: 'v-left' })
            ),
            _react2['default'].createElement(
              'li',
              null,
              _react2['default'].createElement(
                'span',
                null,
                'type:v-right'
              ),
              _react2['default'].createElement(_index2['default'], { type: 'v-right' })
            ),
            _react2['default'].createElement(
              'li',
              null,
              _react2['default'].createElement(
                'span',
                null,
                'type:v-top'
              ),
              _react2['default'].createElement(_index2['default'], { type: 'v-top' })
            ),
            _react2['default'].createElement(
              'li',
              null,
              _react2['default'].createElement(
                'span',
                null,
                'type:weixin-border'
              ),
              _react2['default'].createElement(_index2['default'], { type: 'weixin-border' })
            ),
            _react2['default'].createElement(
              'li',
              null,
              _react2['default'].createElement(
                'span',
                null,
                'type:weixin'
              ),
              _react2['default'].createElement(_index2['default'], { type: 'weixin', style: iconStyle })
            )
          )
        );
      }
    }]);
  
    return Demo;
  })(_react2['default'].Component);
  
  _reactDom2['default'].render(_react2['default'].createElement(Demo, null), document.getElementById('demo'));

});
