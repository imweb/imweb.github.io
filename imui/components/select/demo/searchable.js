define('components/select/demo/searchable.jsx', function(require, exports, module) {

  'use strict';
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
  
  var _react = require('node_modules/react/react');
  
  var _react2 = _interopRequireDefault(_react);
  
  var _reactDom = require('node_modules/react-dom/index');
  
  var _reactDom2 = _interopRequireDefault(_reactDom);
  
  var _index = require('components/select/index.jsx');
  
  var _index2 = _interopRequireDefault(_index);
  
  var SelectSearchableDemo = function SelectSearchableDemo() {
    var options = [{
      name: 'swift',
      value: 101
    }, {
      name: 'java',
      value: 121
    }, {
      name: 'javascript',
      value: 332
    }];
    var bigOptions = [];
    for (var i = 0; i < 500; i++) {
      bigOptions.push({
        name: 'name' + i,
        value: i
      });
    }
    return _react2['default'].createElement(
      'div',
      null,
      _react2['default'].createElement(
        'h3',
        null,
        'with default selected'
      ),
      _react2['default'].createElement(_index2['default'], {
        options: options,
        defaultOption: options[0],
        searchable: true
      }),
      _react2['default'].createElement(
        'h3',
        null,
        'without default selected'
      ),
      _react2['default'].createElement(_index2['default'], {
        options: options,
        searchable: true
      }),
      _react2['default'].createElement(
        'h3',
        null,
        'big data'
      ),
      _react2['default'].createElement(_index2['default'], {
        options: bigOptions,
        searchable: true
      })
    );
  };
  
  _reactDom2['default'].render(_react2['default'].createElement(SelectSearchableDemo, null), document.getElementById('searchable'));

});
