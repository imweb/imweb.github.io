define('external/index', function(require, exports, module) {

  /**
   * 站点首页
   * @author jero
   * @date 2016-08-02
   */

  'use strict';

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  var _jquery = require('external/jquery');

  var _jquery2 = _interopRequireDefault(_jquery);

  var $win = (0, _jquery2['default'])(window);
  var hostname = location.hostname;
  var pathname = location.pathname;

  var M = {
    init: function init() {
      this.size();
      this.events();
      this.$iframe = (0, _jquery2['default'])('iframe:first');
      this.$a = (0, _jquery2['default'])('ul').find('a');

      this.$iframe.prop('src', this.parseHref(this.$a.first().addClass('active').prop('href')));
    },

    parseHref: function parseHref(href) {
        var ret = href; // 默认是 dev 的时候

        if (pathname.indexOf('imui') > -1) {
          ret = href.replace('/components', '/imui/components');
        }

        return ret;
    },

    events: function events() {
      var _this = this;

      $win.on('resize', function () {
        _this.size();
      });

      (0, _jquery2['default'])(document).on('click', 'li a', function (e) {
        e.preventDefault();

        var $target = (0, _jquery2['default'])(e.target);

        if ($target.hasClass('active')) {
          return;
        }

        _this.$a.removeClass('active');
        $target.addClass('active');

        _this.$iframe.prop('src', _this.parseHref(e.target.href));
      });
    },

    size: function size() {
      var headerHeight = (0, _jquery2['default'])('h1:first').outerHeight(true);
      var winHeight = $win.height();

      (0, _jquery2['default'])('#main').height(winHeight - headerHeight);
    }
  };

  M.init();

});
