define('components/dialog/src/Dialog.jsx', function(require, exports, module) {

  /**
   * imui.Dialog
   * @author jero
   * @date 2016-07-28
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
  
  var _util = require('components/dialog/src/util');
  
  var Dialog = (function (_Component) {
    _inherits(Dialog, _Component);
  
    function Dialog(props) {
      _classCallCheck(this, Dialog);
  
      _get(Object.getPrototypeOf(Dialog.prototype), 'constructor', this).call(this, props);
  
      // const { visible } = props;
      //
      // this.state = {
      //   visible
      // };
  
      this.parseScroll = this.parseScroll.bind(this);
      this.onClose = this.onClose.bind(this);
    }
  
    // componentWillReceiveProps(props) {
    //   this.setState({
    //     visible: props.visible
    //   });
    // }
  
    _createClass(Dialog, [{
      key: 'parseScroll',
      value: function parseScroll(visible) {
        var body = document.body;
  
        if ((0, _util.checkScrollbar)() && visible) {
          body.style.paddingRight = (0, _util.getScrollBarWidth)() + 'px';
          body.style.overflow = 'hidden';
        } else {
          body.style.paddingRight = '';
          body.style.overflow = 'auto';
        }
      }
    }, {
      key: 'onClose',
      value: function onClose() {
        if (this.props.onBeforeClose() !== false) {
          // this.parseScroll(false);
          this.props.onClose();
        }
      }
    }, {
      key: 'getMask',
      value: function getMask(isMask, zIndex) {
        return isMask ? _react2['default'].createElement('div', { className: 'im-dialog-mask', style: {
            zIndex: zIndex
          } }) : '';
      }
    }, {
      key: 'getHeader',
      value: function getHeader(title, closeable) {
        return title ? _react2['default'].createElement(
          'div',
          { className: 'im-dialog-hd' },
          _react2['default'].createElement(
            'h3',
            { className: 'im-dialog-hd-text' },
            title
          ),
          closeable ? _react2['default'].createElement(
            'a',
            { onClick: this.onClose, className: 'im-dialog-hd-close' },
            '×'
          ) : ''
        ) : '';
      }
    }, {
      key: 'render',
      value: function render() {
        var _props = this.props;
        var mask = _props.mask;
        var width = _props.width;
        var title = _props.title;
        var zIndex = _props.zIndex;
        var visible = _props.visible;
        var button = _props.button;
        var closeable = _props.closeable;
  
        // const { visible } = this.state;
  
        this.parseScroll(visible);
  
        return visible ? _react2['default'].createElement(
          'div',
          null,
          this.getMask(mask, zIndex),
          _react2['default'].createElement(
            'div',
            { className: 'im-dialog-wrap', style: {
                zIndex: zIndex + 1
              } },
            _react2['default'].createElement(
              'div',
              { className: 'im-dialog', style: {
                  width: width
                } },
              this.getHeader(title, closeable),
              _react2['default'].createElement(
                'div',
                { className: 'im-dialog-bd' },
                this.props.children
              ),
              _react2['default'].createElement(
                'div',
                { className: 'im-dialog-ft' },
                button
              )
            )
          )
        ) : null;
      }
    }]);
  
    return Dialog;
  })(_react.Component);
  
  Dialog.propTypes = {};
  
  Dialog.defaultProps = {};
  
  exports['default'] = Dialog;
  module.exports = exports['default'];

});
