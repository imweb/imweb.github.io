define('components/form/demo/doc.md', function(require, exports, module) {

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
  var doc = "<h2>Input, Textarea等表单组件</h2>\n<table>\n<thead>\n<tr><th style=\"text-align:left\">属性</th><th style=\"text-align:left\">说明</th><th style=\"text-align:left\">类型</th><th style=\"text-align:left\">默认值</th></tr>\n</thead>\n<tbody>\n<tr><td style=\"text-align:left\">name</td><td style=\"text-align:left\">key，配合Form使用时必须要有</td><td style=\"text-align:left\"><code>string</code></td><td style=\"text-align:left\"><code>undefined</code></td></tr>\n<tr><td style=\"text-align:left\">disabled</td><td style=\"text-align:left\">是否可用</td><td style=\"text-align:left\"><code>bool</code></td><td style=\"text-align:left\"><code>false</code></td></tr>\n<tr><td style=\"text-align:left\">isChecking</td><td style=\"text-align:left\">是否开启校验</td><td style=\"text-align:left\"><code>bool</code></td><td style=\"text-align:left\"><code>true</code></td></tr>\n<tr><td style=\"text-align:left\">patterns</td><td style=\"text-align:left\">表单内置校验函数，以∣分开</td><td style=\"text-align:left\"><code>string</code></td><td style=\"text-align:left\"><code>undefined</code></td></tr>\n<tr><td style=\"text-align:left\">tips</td><td style=\"text-align:left\">对应patterns的校验提示信息，以∣分开</td><td style=\"text-align:left\"><code>string</code></td><td style=\"text-align:left\"><code>undefined</code></td></tr>\n<tr><td style=\"text-align:left\">validator</td><td style=\"text-align:left\">传入外置校验函数</td><td style=\"text-align:left\"><code>function</code></td><td style=\"text-align:left\"><code>undefined</code></td></tr>\n</tbody>\n</table>\n<p>几点说明：</p>\n<ul>\n<li><code>disabled</code>属性只是控制了类名以及原生的disabled属性，贡献别的原生不支持disabled组件时需要手动实现</li>\n<li><code>patterns</code>属性可支持的内置校验函数，请查阅validator.js，可自行贡献</li>\n<li><code>validator</code>属性传入的校验函数，形参为<code>(value, callback)</code>，支持异步，<code>callback</code>应传回一个对象，包含<code>isValid: Bool</code>和<code>msgs: Array</code>属性</li>\n</ul>\n<p>提示：</p>\n<ul>\n<li><code>tips</code>属性后续会支持当前值替换，此版本暂未实现</li>\n<li>Radio, Checkbox, Select等其余组件还在全力开发中...</li>\n</ul>\n<pre><code class=\"language-js\"><span class=\"hljs-function\"><span class=\"hljs-keyword\">function</span> <span class=\"hljs-title\">validator</span>(<span class=\"hljs-params\">value, callback</span>) </span>{\n  $.ajax({\n    url: <span class=\"hljs-string\">'/example'</span>,\n    data: {\n      value: value\n    }\n  }).done(<span class=\"hljs-function\"><span class=\"hljs-keyword\">function</span>(<span class=\"hljs-params\">data</span>) </span>{\n    callback({\n      isValid: data.isValid,\n      msgs: data.msgs\n    });\n  });\n}\n</code></pre>\n"; // @DOC@ 会在编译时被替换为 html 字符串，然后再被调用
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
  //# sourceMappingURL=/components/form/demo/doc.js.map
  

});
