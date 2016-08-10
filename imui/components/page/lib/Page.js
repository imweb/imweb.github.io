define('components/page/lib/Page.jsx', function(require, exports, module) {

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
  
  var _classnames = require('node_modules/classnames/index');
  
  var _classnames2 = _interopRequireDefault(_classnames);
  
  var _buttonIndex = require('components/button/index.jsx');
  
  var _buttonIndex2 = _interopRequireDefault(_buttonIndex);
  
  var _iconIndex = require('components/icon/index.jsx');
  
  var _iconIndex2 = _interopRequireDefault(_iconIndex);
  
  /**
   * 翻页组件
   * 如果页数太大，会有一部分被隐藏，但是第一页和对后一个一直都会显示。中间会显示当前选中页和当前选中页附近的页
   */
  
  var Page = (function (_React$Component) {
    _inherits(Page, _React$Component);
  
    function Page(props) {
      _classCallCheck(this, Page);
  
      _get(Object.getPrototypeOf(Page.prototype), 'constructor', this).call(this, props);
      this.prevOnClick = this.prevOnClick.bind(this);
      this.nextOnClick = this.nextOnClick.bind(this);
      this.goPage = this.goPage.bind(this);
      this.state = {
        // 当前选中页
        currentPage: 0,
        // 要显示在中间的按钮列表
        displayBtnList: []
      };
    }
  
    _createClass(Page, [{
      key: 'render',
      value: function render() {
        var _props = this.props;
        var totalPage = _props.totalPage;
        var size = _props.size;
        var _state = this.state;
        var currentPage = _state.currentPage;
        var displayBtnList = _state.displayBtnList;
  
        var classes = (0, _classnames2['default'])({
          'im-page': true,
          'im-page--small': size === 's',
          'im-page--large': size === 'l'
        });
        return _react2['default'].createElement(
          'div',
          { className: classes },
          _react2['default'].createElement(
            _buttonIndex2['default'],
            {
              color: 'weak',
              size: size,
              disabled: currentPage <= 1,
              onClick: currentPage <= 1 ? null : this.prevOnClick
            },
            _react2['default'].createElement(_iconIndex2['default'], {
              type: 'v-left'
            })
          ),
          displayBtnList,
          _react2['default'].createElement(
            _buttonIndex2['default'],
            {
              color: 'weak',
              size: size,
              disabled: currentPage >= totalPage,
              onClick: currentPage >= totalPage ? null : this.nextOnClick
            },
            _react2['default'].createElement(_iconIndex2['default'], {
              type: 'v-right'
            })
          )
        );
      }
    }, {
      key: 'componentDidMount',
      value: function componentDidMount() {
        var defaultPage = this.props.defaultPage;
  
        this.goPage(defaultPage);
      }
    }, {
      key: 'prevOnClick',
      value: function prevOnClick() {
        this.goPage(this.state.currentPage - 1);
      }
    }, {
      key: 'nextOnClick',
      value: function nextOnClick() {
        this.goPage(this.state.currentPage + 1);
      }
  
      /**
       * 切换到pageNum页
       * @param pageNum
       */
    }, {
      key: 'goPage',
      value: function goPage(pageNum) {
        var self = this;
        var _props2 = this.props;
        var onChange = _props2.onChange;
        var size = _props2.size;
        var maxDisplayNumber = _props2.maxDisplayNumber;
        var totalPage = _props2.totalPage;
        var currentPage = this.state.currentPage;
  
        var displayBtnList = [];
        // 往要显示在中间的按钮列表添加一个元素
        function pushBtn(btnIndex) {
          displayBtnList.push(_react2['default'].createElement(
            _buttonIndex2['default'],
            {
              key: btnIndex,
              size: size,
              color: btnIndex === pageNum ? 'default' : 'weak',
              onClick: function () {
                return self.goPage(btnIndex);
              }
            },
            btnIndex
          ));
        }
  
        // page 为1的按钮一直都要显示
        if (pageNum !== 1) {
          pushBtn(1);
        }
        var step = Math.floor((maxDisplayNumber - 2) / 2);
        var startIndex = pageNum - step;
        if (startIndex < 2) {
          startIndex = 2;
        }
        var endIndex = pageNum + (maxDisplayNumber - 2 - step);
        if (endIndex > totalPage - 1) {
          endIndex = totalPage - 1;
        }
        // 中间是否被隐藏了翻页按钮 隐藏的部分显示为...
        if (startIndex > 2) {
          displayBtnList.push(_react2['default'].createElement(
            'span',
            { key: '<' },
            '...'
          ));
        }
        for (var i = startIndex; i < pageNum; i++) {
          pushBtn(i);
        }
        for (var i = pageNum; i <= endIndex; i++) {
          pushBtn(i);
        }
        // 中间是否被隐藏了翻页按钮 隐藏的部分显示为...
        if (endIndex < totalPage - 1) {
          displayBtnList.push(_react2['default'].createElement(
            'span',
            { key: '>' },
            '...'
          ));
        }
        // 最后一页的按钮必须显示
        pushBtn(totalPage);
  
        this.setState({
          currentPage: pageNum,
          displayBtnList: displayBtnList
        });
        if (onChange != null) {
          onChange(pageNum, currentPage);
        }
      }
    }]);
  
    return Page;
  })(_react2['default'].Component);
  
  Page.propTypes = {
    /**
     * 总页数
     */
    totalPage: _react2['default'].PropTypes.number.isRequired,
    /**
     * 默认选中页
     */
    defaultPage: _react2['default'].PropTypes.number,
    /**
     * 最大显示的分页按钮的数量,多余这个数量的按钮将被隐藏
     * 在有很多页时会显示所有页，所以需要设置一个最大显示多少页。
     */
    maxDisplayNumber: _react2['default'].PropTypes.number,
    /**
     * 当用户翻页时调用 callback(当前点击页,在点击前选中当页)
     * 注意：从1开始计数
     */
    onChange: _react2['default'].PropTypes.func,
    size: _react2['default'].PropTypes.oneOf(['l', 'm', 's'])
  };
  
  Page.defaultProps = {
    defaultPage: 1,
    maxDisplayNumber: 6
  };
  
  exports['default'] = Page;
  module.exports = exports['default'];

});
