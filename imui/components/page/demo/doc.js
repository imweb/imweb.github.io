define('components/page/demo/doc.md', function(require, exports, module) {

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
  var doc = "<h2>分页组件</h2>\n<h3>注意</h3>\n<ul>\n<li>如果页数太大，会有一部分被隐藏，但是第一页和对后一个一直都会显示。中间会显示当前选中页和当前选中页附近的页</li>\n<li>从1开始计数</li>\n</ul>\n"; // @DOC@ 会在编译时被替换为 html 字符串，然后再被调用
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
  //# sourceMappingURL=/components/page/demo/doc.js.map
  

});
