define('components/tab/demo/doc.md', function(require, exports, module) {

  "use strict";
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
  
  var _react = require("node_modules/react/react");
  
  var _react2 = _interopRequireDefault(_react);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
  
  function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
  
  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  * 文档 jsx 的模版
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  * @author jero
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  * @date 2016-08-18
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  */
  
  /* eslint-disable */
  var doc = "<h2>选项卡</h2>\n<table>\n<thead>\n<tr><th style=\"text-align:left\">属性</th><th style=\"text-align:left\">说明</th><th style=\"text-align:left\">类型</th><th style=\"text-align:left\">默认值</th></tr>\n</thead>\n<tbody>\n<tr><td style=\"text-align:left\">active</td><td style=\"text-align:left\">第几个 <code>tab</code> 选中</td><td style=\"text-align:left\"><code>string</code></td><td style=\"text-align:left\"><code>'0'</code></td></tr>\n<tr><td style=\"text-align:left\">tabType</td><td style=\"text-align:left\">选中样式</td><td style=\"text-align:left\"><code>oneof: bottom, border, top</code></td><td style=\"text-align:left\"><code>bottom</code></td></tr>\n<tr><td style=\"text-align:left\">onActive</td><td style=\"text-align:left\">选中后事件</td><td style=\"text-align:left\"><code>func</code></td><td style=\"text-align:left\">空函数</td></tr>\n<tr><td style=\"text-align:left\">onBeforeActive</td><td style=\"text-align:left\">选中前事件，回调参数有两个，分别为即将选中的序号和当前选中的序号，返回值为 <code>false</code> 时，阻止选中</td><td style=\"text-align:left\"><code>func</code></td><td style=\"text-align:left\">空函数</td></tr>\n</tbody>\n</table>\n<p>几点说明：</p>\n<ul>\n<li>把 <code>tab</code> 的切换行为称为 <code>active</code> ，于是有 <code>active</code> 和 <code>onActive</code> 等一些列属性</li>\n<li><code>onActive</code> 和 <code>onBeforeActive</code> 都有参数</li>\n</ul>\n<pre><code class=\"language-js\">onActive: <span class=\"hljs-function\"><span class=\"hljs-keyword\">function</span>(<span class=\"hljs-params\">current, prev</span>) </span>{\n  <span class=\"hljs-comment\">// current 当前 active</span>\n  <span class=\"hljs-comment\">// prev 上一个 active</span>\n}\n\nonActive: <span class=\"hljs-function\"><span class=\"hljs-keyword\">function</span>(<span class=\"hljs-params\">next, current</span>) </span>{\n  <span class=\"hljs-comment\">// prev 下一个 active</span>\n  <span class=\"hljs-comment\">// current 当前 active</span>\n\n  <span class=\"hljs-keyword\">return</span> <span class=\"hljs-literal\">false</span>; <span class=\"hljs-comment\">// 返回 false 是会阻止切换</span>\n}\n</code></pre>\n"; // @DOC@ 会在编译时被替换为 html 字符串，然后再被调用
  /* eslint-enable */
  
  var ImuiDoc = function (_Component) {
    _inherits(ImuiDoc, _Component);
  
    function ImuiDoc() {
      _classCallCheck(this, ImuiDoc);
  
      return _possibleConstructorReturn(this, Object.getPrototypeOf(ImuiDoc).apply(this, arguments));
    }
  
    _createClass(ImuiDoc, [{
      key: "setDoc",
      value: function setDoc() {
        return {
          __html: doc
        };
      }
    }, {
      key: "render",
      value: function render() {
        return _react2.default.createElement("section", { className: "markdown-body", dangerouslySetInnerHTML: this.setDoc() });
      }
    }]);
  
    return ImuiDoc;
  }(_react.Component);
  
  exports.default = ImuiDoc;
  //# sourceMappingURL=/components/tab/demo/doc.js.map
  

});
