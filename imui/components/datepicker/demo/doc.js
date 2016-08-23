define('components/datepicker/demo/doc.md', function(require, exports, module) {

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
  var doc = "<h2>属性说明</h2>\n<table>\n<thead>\n<tr><th style=\"text-align:left\">属性</th><th style=\"text-align:left\">说明</th><th style=\"text-align:left\">类型</th><th style=\"text-align:left\">默认值</th></tr>\n</thead>\n<tbody>\n<tr><td style=\"text-align:left\">inline</td><td style=\"text-align:left\">是否为inline模式</td><td style=\"text-align:left\"><code>bool</code></td><td style=\"text-align:left\"><code>false</code></td></tr>\n<tr><td style=\"text-align:left\">selected</td><td style=\"text-align:left\">当前选中日期（单选模式）</td><td style=\"text-align:left\"><code>instanceOf(Date)</code></td><td style=\"text-align:left\"></td></tr>\n<tr><td style=\"text-align:left\">initMonth</td><td style=\"text-align:left\">打开日历时默认显示的月份</td><td style=\"text-align:left\"><code>instanceOf(Date)</code></td><td style=\"text-align:left\">new Date()</td></tr>\n<tr><td style=\"text-align:left\">showPicker</td><td style=\"text-align:left\">是否默认展示选择器的日历</td><td style=\"text-align:left\"><code>bool</code></td><td style=\"text-align:left\"><code>false</code></td></tr>\n<tr><td style=\"text-align:left\">className</td><td style=\"text-align:left\">选择器自定义className</td><td style=\"text-align:left\"><code>string</code></td><td style=\"text-align:left\"></td></tr>\n<tr><td style=\"text-align:left\">minDate</td><td style=\"text-align:left\">选择器允许选择的最小日期</td><td style=\"text-align:left\"><code>instanceOf(Date)</code></td><td style=\"text-align:left\"></td></tr>\n<tr><td style=\"text-align:left\">maxDate</td><td style=\"text-align:left\">选择器允许选择的最大日期</td><td style=\"text-align:left\"><code>instanceOf(Date)</code></td><td style=\"text-align:left\"></td></tr>\n<tr><td style=\"text-align:left\">placeholder</td><td style=\"text-align:left\">输入框的placeholder</td><td style=\"text-align:left\"><code>string</code></td><td style=\"text-align:left\"></td></tr>\n<tr><td style=\"text-align:left\">calendarZindex</td><td style=\"text-align:left\">非inline模式下日历的z-index</td><td style=\"text-align:left\"><code>number</code></td><td style=\"text-align:left\"></td></tr>\n<tr><td style=\"text-align:left\">showIcon</td><td style=\"text-align:left\">是否在输入框中显示日历icon，仅在非inline模式下有效</td><td style=\"text-align:left\"><code>bool</code></td><td style=\"text-align:left\"><code>false</code></td></tr>\n<tr><td style=\"text-align:left\">showClean</td><td style=\"text-align:left\">是否在输入框中显示清空按钮，仅在非inline模式下有效</td><td style=\"text-align:left\"><code>bool</code></td><td style=\"text-align:left\"><code>false</code></td></tr>\n<tr><td style=\"text-align:left\">disabled</td><td style=\"text-align:left\">是否禁用datepicker操作</td><td style=\"text-align:left\"><code>bool</code></td><td style=\"text-align:left\"><code>false</code></td></tr>\n<tr><td style=\"text-align:left\">inputWidth</td><td style=\"text-align:left\">input展示框的宽度（算上padding和border）</td><td style=\"text-align:left\"><code>number</code></td><td style=\"text-align:left\"><code>175</code></td></tr>\n<tr><td style=\"text-align:left\">dateFormat</td><td style=\"text-align:left\">输入框的输出格式 例如: 'YYYY-MM-DD'</td><td style=\"text-align:left\"><code>string</code></td><td style=\"text-align:left\"><code>'YYYY-MM-DD'</code></td></tr>\n<tr><td style=\"text-align:left\">weekMode</td><td style=\"text-align:left\">是否启用周选模式</td><td style=\"text-align:left\"><code>bool</code></td><td style=\"text-align:left\"><code>false</code></td></tr>\n<tr><td style=\"text-align:left\">selectedWeek</td><td style=\"text-align:left\">启用周选模式时有效 当前选中的周中的一天</td><td style=\"text-align:left\"><code>instanceOf(Date)</code></td><td style=\"text-align:left\"></td></tr>\n<tr><td style=\"text-align:left\">rangeJoin</td><td style=\"text-align:left\">显示范围日期的连接字符串目前仅在周选模式下有效</td><td style=\"text-align:left\"><code>string</code></td><td style=\"text-align:left\"><code>' 至 '</code></td></tr>\n<tr><td style=\"text-align:left\">onChange</td><td style=\"text-align:left\">目标日期改变时的回调函数</td><td style=\"text-align:left\"><code>func</code></td><td style=\"text-align:left\">空函数</td></tr>\n<tr><td style=\"text-align:left\">onChangeMonth</td><td style=\"text-align:left\">月份切换时的回调函数</td><td style=\"text-align:left\"><code>func</code></td><td style=\"text-align:left\">空函数</td></tr>\n</tbody>\n</table>\n<h2>回调函数说明</h2>\n<pre><code class=\"language-js\">onChange: <span class=\"hljs-function\"><span class=\"hljs-keyword\">function</span>(<span class=\"hljs-params\">current, prev</span>) </span>{\n  <span class=\"hljs-comment\">// current 当前 选中日期</span>\n  <span class=\"hljs-comment\">// prev 上一个 选中日期</span>\n}\n\nonChangeMonth: <span class=\"hljs-function\"><span class=\"hljs-keyword\">function</span>(<span class=\"hljs-params\">current, prev</span>) </span>{\n  <span class=\"hljs-comment\">// current 当前 月份所</span>\n  <span class=\"hljs-comment\">// prev 上一个 月份所</span>\n}\n</code></pre>\n"; // @DOC@ 会在编译时被替换为 html 字符串，然后再被调用
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
  //# sourceMappingURL=/components/datepicker/demo/doc.js.map
  

});
