define('components/select/lib/Select.jsx', function(require, exports, module) {

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
  
  var _iconIndex = require('components/icon/index.jsx');
  
  var _iconIndex2 = _interopRequireDefault(_iconIndex);
  
  var Select = (function (_React$Component) {
    _inherits(Select, _React$Component);
  
    function Select(props) {
      _classCallCheck(this, Select);
  
      _get(Object.getPrototypeOf(Select.prototype), 'constructor', this).call(this, props);
      this.onSearch = this.onSearch.bind(this);
      this.toggleDropdown = this.toggleDropdown.bind(this);
      this.closeDropdown = this.closeDropdown.bind(this);
      this.state = {
        // 当前选中
        selectedOption: this.props.defaultOption,
        // 搜索关键字
        searchKeyword: null,
        // 当前是否正在选择中
        showDropdown: false
      };
    }
  
    _createClass(Select, [{
      key: 'componentWillMount',
      value: function componentWillMount() {
        var defaultOption = this.props.defaultOption;
  
        var searchKeyword = '';
        if (defaultOption) {
          searchKeyword = this.props.defaultOption.name;
        }
        this.setState({
          searchKeyword: searchKeyword
        });
      }
    }, {
      key: 'render',
      value: function render() {
        var _this = this;
  
        var _props = this.props;
        var searchable = _props.searchable;
        var options = _props.options;
        var style = _props.style;
        var _state = this.state;
        var selectedOption = _state.selectedOption;
        var searchKeyword = _state.searchKeyword;
        var showDropdown = _state.showDropdown;
  
        // show options
        var optionsList = [];
        if (options != null) {
          options.forEach(function (option) {
            if (!searchable || option.name.indexOf(searchKeyword) >= 0) {
              optionsList.push(_react2['default'].createElement(
                'div',
                {
                  className: 'im-select--dropdown--list--one',
                  value: option.value,
                  key: option.value,
                  onClick: function () {
                    return _this.onSelect(option);
                  }
                },
                option.name
              ));
            }
          });
        } else {
          // 加载中
          optionsList.push(_react2['default'].createElement(
            'div',
            {
              key: 0,
              className: 'im-select--dropdown--list--one'
            },
            '加载中...'
          ));
        }
  
        return _react2['default'].createElement(
          'div',
          { className: 'im-select', onMouseLeave: this.closeDropdown, style: style },
          _react2['default'].createElement(
            'div',
            { className: 'im-select--wrap', onClick: this.toggleDropdown },
            searchable ? _react2['default'].createElement('input', {
              className: 'im-select--wrap--text',
              type: 'text',
              value: searchKeyword,
              onChange: this.onSearch
            }) : _react2['default'].createElement(
              'div',
              { className: 'im-select--wrap--text' },
              selectedOption ? selectedOption.name : null
            ),
            _react2['default'].createElement(
              'span',
              { className: 'im-select--wrap--icon' },
              _react2['default'].createElement(_iconIndex2['default'], {
                type: 'v-bottom'
              })
            )
          ),
          optionsList.length > 0 ? _react2['default'].createElement(
            'div',
            { className: 'im-select--dropdown', style: { display: showDropdown ? 'block' : 'none' } },
            _react2['default'].createElement(
              'div',
              { className: 'im-select--dropdown--list' },
              optionsList
            )
          ) : null
        );
      }
    }, {
      key: 'onSelect',
      value: function onSelect(option) {
        var onChange = this.props.onChange;
  
        if (onChange) {
          onChange(option, this.state.selectedOption);
        }
        this.setState({
          selectedOption: option,
          searchKeyword: option.name,
          showDropdown: false
        });
      }
    }, {
      key: 'onSearch',
      value: function onSearch(event) {
        var input = event.currentTarget;
        this.setState({
          searchKeyword: input.value,
          showDropdown: true
        });
      }
    }, {
      key: 'toggleDropdown',
      value: function toggleDropdown() {
        this.setState({
          showDropdown: !this.state.showDropdown
        });
      }
    }, {
      key: 'closeDropdown',
      value: function closeDropdown() {
        this.setState({
          showDropdown: false
        });
      }
    }]);
  
    return Select;
  })(_react2['default'].Component);
  
  Select.propTypes = {
    /**
     * 是否可以启用文字输入框搜索选项
     */
    searchable: _react2['default'].PropTypes.bool,
    /**
     * 下拉列表所有选项数据
     */
    options: _react2['default'].PropTypes.arrayOf(_react2['default'].PropTypes.shape({
      /**
       * 选项显示名称
       */
      name: _react2['default'].PropTypes.string.isRequired,
      /**
       * 选项值
       */
      value: _react2['default'].PropTypes.any.isRequired
    })),
    /**
     * 默认选中的选项的值
     */
    defaultOption: _react2['default'].PropTypes.shape({
      name: _react2['default'].PropTypes.string.isRequired,
      value: _react2['default'].PropTypes.any.isRequired
    }),
    /**
     * 当选中的值发生变化时调用
     * callback(newValue,oldValue)
     */
    onChange: _react2['default'].PropTypes.func
  };
  
  Select.defaultProps = {};
  
  exports['default'] = Select;
  module.exports = exports['default'];

});
