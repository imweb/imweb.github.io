define('components/tab/demo/demo1.jsx', function(require, exports, module) {

  // @require 'components/style/reset.scss'
  
  'use strict';
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
  
  var _react = require('node_modules/react/react');
  
  var _react2 = _interopRequireDefault(_react);
  
  var _reactDom = require('node_modules/react-dom/index');
  
  var _reactDom2 = _interopRequireDefault(_reactDom);
  
  var _index = require('components/tab/index.jsx');
  
  var _index2 = _interopRequireDefault(_index);
  
  var Demo = function Demo() {
    return _react2['default'].createElement(
      'div',
      null,
      _react2['default'].createElement(
        'h2',
        null,
        'Border Tab'
      ),
      _react2['default'].createElement(
        _index2['default'],
        { tabType: 'border' },
        _react2['default'].createElement(
          _index.TabPanel,
          { tab: '选项1' },
          _react2['default'].createElement(
            'p',
            null,
            '面板1'
          )
        ),
        _react2['default'].createElement(
          _index.TabPanel,
          { tab: '选项2' },
          _react2['default'].createElement(
            'p',
            null,
            '面板2'
          )
        ),
        _react2['default'].createElement(
          _index.TabPanel,
          { tab: '选项3' },
          _react2['default'].createElement(
            'p',
            null,
            '面板3'
          )
        )
      )
    );
  };
  
  _reactDom2['default'].render(_react2['default'].createElement(Demo, null), document.getElementById('demo1'));

});
