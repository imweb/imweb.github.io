define('components/dialog/demo/doc.md', function(require, exports, module) {

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
  var doc = "<h2>选项卡</h2>\n<table>\n<thead>\n<tr><th style=\"text-align:left\">属性</th><th style=\"text-align:left\">说明</th><th style=\"text-align:left\">类型</th><th style=\"text-align:left\">默认值</th></tr>\n</thead>\n<tbody>\n<tr><td style=\"text-align:left\">mask</td><td style=\"text-align:left\">是否出现遮罩</td><td style=\"text-align:left\"><code>bool</code></td><td style=\"text-align:left\"><code>true</code></td></tr>\n<tr><td style=\"text-align:left\">visible</td><td style=\"text-align:left\">是否可见</td><td style=\"text-align:left\"><code>bool</code></td><td style=\"text-align:left\"><code>false</code></td></tr>\n<tr><td style=\"text-align:left\">width</td><td style=\"text-align:left\">宽度</td><td style=\"text-align:left\"><code>number</code></td><td style=\"text-align:left\"><code>600</code></td></tr>\n<tr><td style=\"text-align:left\">title</td><td style=\"text-align:left\">标题，可为空</td><td style=\"text-align:left\"><code>node</code></td><td style=\"text-align:left\"><code>''</code></td></tr>\n<tr><td style=\"text-align:left\">zIndex</td><td style=\"text-align:left\">z-index</td><td style=\"text-align:left\"><code>number</code></td><td style=\"text-align:left\"><code>1050</code></td></tr>\n<tr><td style=\"text-align:left\">closeable</td><td style=\"text-align:left\">是否显示右上角的 x</td><td style=\"text-align:left\"><code>bool</code></td><td style=\"text-align:left\"><code>true</code></td></tr>\n<tr><td style=\"text-align:left\">button</td><td style=\"text-align:left\">按钮，请使用 imui.Button</td><td style=\"text-align:left\"><code>arrayOf(PropTypes.element)</code></td><td style=\"text-align:left\"><code>[]</code></td></tr>\n<tr><td style=\"text-align:left\">onClose</td><td style=\"text-align:left\">关闭后的回调</td><td style=\"text-align:left\"><code>func</code></td><td style=\"text-align:left\">空函数</td></tr>\n<tr><td style=\"text-align:left\">onBeforeClose</td><td style=\"text-align:left\">关闭之前的回调，返回 false 可以阻止关闭</td><td style=\"text-align:left\"><code>func</code></td><td style=\"text-align:left\">空函数</td></tr>\n</tbody>\n</table>\n<p>几点说明：</p>\n<ul>\n<li>这个 <code>Dialog</code> 有那么点弱，希望后续有人接手增强</li>\n<li><code>onBeforeClose</code> 的返回值</li>\n</ul>\n<pre><code class=\"language-js\">onBeforeClose: <span class=\"hljs-function\"><span class=\"hljs-keyword\">function</span>(<span class=\"hljs-params\"></span>) </span>{\n  <span class=\"hljs-comment\">// todo...</span>\n\n  <span class=\"hljs-keyword\">return</span> <span class=\"hljs-literal\">false</span>; <span class=\"hljs-comment\">// 返回 false 是会阻止关闭</span>\n}\n</code></pre>\n"; // @DOC@ 会在编译时被替换为 html 字符串，然后再被调用
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
  //# sourceMappingURL=/components/dialog/demo/doc.js.map
  

});
