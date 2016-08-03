define('components/dialog/src/util', function(require, exports, module) {

  /**
   * 工具方法
   * @author jero
   * @date 2016-08-01
   */
  
  'use strict';
  
  Object.defineProperty(exports, '__esModule', {
    value: true
  });
  var scrollBarWidth = 0;
  
  var scrollbarMeasure = {
    position: 'absolute',
    top: '-9999px',
    width: '50px',
    height: '50px',
    overflow: 'scroll'
  };
  
  function getScrollBarWidth() {
    if (scrollBarWidth) {
      return scrollBarWidth;
    }
  
    var scrollDiv = document.createElement('div');
  
    Object.keys(scrollbarMeasure).forEach(function (k) {
      scrollDiv.style[k] = scrollbarMeasure[k];
    });
  
    document.body.appendChild(scrollDiv);
  
    var sWidth = scrollDiv.offsetWidth - scrollDiv.clientWidth;
  
    document.body.removeChild(scrollDiv);
    scrollBarWidth = sWidth;
  
    return sWidth;
  }
  
  function getCurrentStyle(elem) {
    return window.getComputedStyle ? window.getComputedStyle(elem) : elem.currentStyle;
  }
  
  function getExtraWidth(elem) {
    var style = getCurrentStyle(elem);
  
    return parseInt(style.marginLeft.replace('px', ''), 10) + parseInt(style.marginRight.replace('px', ''), 10);
  }
  
  function checkScrollbar() {
    var body = document.body;
    var fullWindowWidth = window.innerWidth;
  
    if (!fullWindowWidth) {
      // workaround for missing window.innerWidth in IE8
      var documentElementRect = document.documentElement.getBoundingClientRect();
      fullWindowWidth = documentElementRect.right - Math.abs(documentElementRect.left);
    }
  
    var extraWidth = getExtraWidth(body);
    console.log(body.clientWidth + extraWidth, fullWindowWidth);
    return body.clientWidth + extraWidth < fullWindowWidth;
  }
  
  exports.getScrollBarWidth = getScrollBarWidth;
  exports.checkScrollbar = checkScrollbar;

});
