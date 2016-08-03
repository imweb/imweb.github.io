define('components/test/demo/comment.jsx', function(require, exports, module) {

  /**
   * React 入门
   * @author jero
   * @date 2016-07-20
   */
  
  /* global Remarkable,fetch */
  
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
  
  require('node_modules/whatwg-fetch/fetch');
  
  var Comment = (function (_React$Component) {
    _inherits(Comment, _React$Component);
  
    function Comment() {
      _classCallCheck(this, Comment);
  
      _get(Object.getPrototypeOf(Comment.prototype), 'constructor', this).apply(this, arguments);
    }
  
    _createClass(Comment, [{
      key: 'rawMarkUp',
      value: function rawMarkUp() {
        var md = new Remarkable();
        var rawMarkUp = md.render(this.props.children.toString());
  
        return {
          __html: rawMarkUp
        };
      }
    }, {
      key: 'render',
      value: function render() {
        return _react2['default'].createElement(
          'div',
          { className: 'comment' },
          _react2['default'].createElement(
            'h2',
            { className: 'commentAuthor' },
            this.props.author
          ),
          _react2['default'].createElement('div', { dangerouslySetInnerHTML: this.rawMarkUp() })
        );
      }
    }]);
  
    return Comment;
  })(_react2['default'].Component);
  
  var CommentList = (function (_React$Component2) {
    _inherits(CommentList, _React$Component2);
  
    function CommentList() {
      _classCallCheck(this, CommentList);
  
      _get(Object.getPrototypeOf(CommentList.prototype), 'constructor', this).apply(this, arguments);
    }
  
    _createClass(CommentList, [{
      key: 'render',
      value: function render() {
        console.log(this.props.data, '33333');
        var commentNodes = this.props.data.map(function (comment) {
          return _react2['default'].createElement(
            Comment,
            { author: comment.author, key: comment.id },
            comment.text
          );
        });
  
        return _react2['default'].createElement(
          'div',
          { className: 'commentList' },
          commentNodes
        );
      }
    }]);
  
    return CommentList;
  })(_react2['default'].Component);
  
  var CommentForm = (function (_React$Component3) {
    _inherits(CommentForm, _React$Component3);
  
    function CommentForm(props) {
      _classCallCheck(this, CommentForm);
  
      _get(Object.getPrototypeOf(CommentForm.prototype), 'constructor', this).call(this, props);
  
      this.state = {
        author: '',
        text: ''
      };
  
      this.handleAuthorChange = this.handleAuthorChange.bind(this);
      this.handleTextChange = this.handleTextChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    _createClass(CommentForm, [{
      key: 'handleAuthorChange',
      value: function handleAuthorChange(e) {
        this.setState({
          author: e.target.value
        });
      }
    }, {
      key: 'handleTextChange',
      value: function handleTextChange(e) {
        this.setState({
          text: e.target.value
        });
      }
    }, {
      key: 'handleSubmit',
      value: function handleSubmit(e) {
        e.preventDefault();
  
        var author = this.state.author.trim();
        var text = this.state.text.trim();
  
        if (!text || !author) {
          return;
        }
  
        this.props.onCommentSubmit({
          author: author,
          text: text,
          id: Math.random()
        });
        this.setState({
          author: '',
          text: ''
        });
      }
    }, {
      key: 'render',
      value: function render() {
        return _react2['default'].createElement(
          'form',
          { className: 'commentForm', onSubmit: this.handleSubmit },
          _react2['default'].createElement(
            'p',
            null,
            _react2['default'].createElement('input', {
              type: 'text',
              placeholder: 'Your name',
              value: this.state.author,
              onChange: this.handleAuthorChange
            })
          ),
          _react2['default'].createElement(
            'p',
            null,
            _react2['default'].createElement('input', {
              type: 'text',
              placeholder: 'Say something...',
              value: this.state.text,
              onChange: this.handleTextChange
            })
          ),
          _react2['default'].createElement(
            'p',
            null,
            _react2['default'].createElement('input', { type: 'submit', value: 'Post' })
          )
        );
      }
    }]);
  
    return CommentForm;
  })(_react2['default'].Component);
  
  var CommentBox = (function (_React$Component4) {
    _inherits(CommentBox, _React$Component4);
  
    function CommentBox(props) {
      _classCallCheck(this, CommentBox);
  
      _get(Object.getPrototypeOf(CommentBox.prototype), 'constructor', this).call(this, props);
  
      this.state = {
        data: []
      };
  
      this.handleCommentSubmit = this.handleCommentSubmit.bind(this);
    }
  
    _createClass(CommentBox, [{
      key: 'loadCommentsFromServer',
      value: function loadCommentsFromServer() {
        var _this = this;
  
        fetch('/api/comments').then(function (res) {
          return res.json();
        }).then(function (data) {
          _this.setState({
            data: data
          });
        });
      }
    }, {
      key: 'handleCommentSubmit',
      value: function handleCommentSubmit(comment) {
        var _this2 = this;
  
        fetch('/api/post', {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(comment)
        }).then(function (response) {
          return response.json();
        }).then(function (data) {
          _this2.setState({
            data: data
          });
        });
      }
    }, {
      key: 'componentDidMount',
      value: function componentDidMount() {
        this.loadCommentsFromServer();
        // setInterval(this.loadCommentsFromServer.bind(this), this.props.pollInterval);
      }
    }, {
      key: 'render',
      value: function render() {
        return _react2['default'].createElement(
          'div',
          { className: 'commentBox' },
          _react2['default'].createElement(
            'h1',
            null,
            'Comments'
          ),
          _react2['default'].createElement(CommentList, { data: this.state.data, pollInterval: 2000 }),
          _react2['default'].createElement(CommentForm, { onCommentSubmit: this.handleCommentSubmit })
        );
      }
    }]);
  
    return CommentBox;
  })(_react2['default'].Component);
  
  _reactDom2['default'].render(_react2['default'].createElement(CommentBox, { url: '/api/comments' }), document.getElementById('demo1'));

});
