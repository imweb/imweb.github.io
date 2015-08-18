(function () {

    window.onload = function () {
        initNavBar();
    };

    var $ = function (selector) {
        var doms = document.querySelectorAll(selector);
        return doms;
    }
    var topNav = $('.top-nav')[0];

    function initNavBar () {
        var navObjs = getNavObjs();
        generateNavBar(navObjs);
        initNavInteraction(navObjs);
    }

    var getNavObjs = function () {
        var navdoms = $('.guide-tt');
        var ret = [];
        for (var i = 0, len = navdoms.length; i < len; i++) {
            var item = navdoms[i];
            ret.push({
                title: item.innerHTML,
                id: item.id,
                cls: item.id.replace('anch-', 'nav-'),
                showingOffsetTop: item.offsetTop
            });
        }
        return ret;
    };

    var generateNavBar = function (navObjs) {
        var navContainer = document.createElement('div');
        var str = '<ul>';
        for (var i = 0, len = navObjs.length; i < len; i++) {
            var obj = navObjs[i];
            var cls = i === 0 ? obj.cls + ' active' : obj.cls;
            str += '<li class="' + cls + '"><a href="#' +
                   obj.id + '">' + obj.title + '</a></li>';
        }
        str += '</ul>';
        navContainer.innerHTML = str;
        navContainer.className = 'title-nav';
        navContainer.style.height = navObjs.length * 20 + 'px';
        // navContainer.addEventListener('click', selectHandler(navObjs))
        document.body.appendChild(navContainer);
    };

    var initNavInteraction = function (navObjs) {
        var stamp = false;
        document.addEventListener('scroll', function () {
            if (stamp) clearTimeout(stamp);
            stamp = setTimeout(function() {
                var scrollY = window.scrollY;
                var isSelected = false;
                for (var i = 0, len = navObjs.length; i < len; i++) {
                    var obj = navObjs[i];
                    var nextObj = navObjs[i + 1];
                    var li = $('.' + obj.cls)[0];
                    if (scrollY >= obj.showingOffsetTop &&
                    scrollY < nextObj.showingOffsetTop) {
                        li.className = obj.cls + ' active';
                    } else if (i === 0 &&
                    scrollY < navObjs[0].showingOffsetTop) {
                        li.className = obj.cls + ' active';
                    } else {
                        li.className = obj.cls;
                    }
                }
            }, 0);
        });
    };

    var selectHandler = function (navObjs) {
        return function (e) {
            if (e.target.tagName !== 'a') return;
            var currentTitle = e.target.innerHTML;
            var currentLi = e.target.parentNode;
            for (var i = 0, len = navObjs.length; i < len; i++) {
                var obj = navObjs[i];
                var li = $('.' + obj.cls)[0];
                if (obj.title !== currentTitle) {
                    if (li.className !== obj.cls) {
                        li.className = obj.cls;
                    }
                }
            }
            if (currentLi.className.search(' ') === -1) {
                currentLi.className += ' active';
            }
        }
    }

})();