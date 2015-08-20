(function() {

    function $$(selector) {
        return Array.prototype.slice.call(document.querySelectorAll(selector));
    }

    var $navObjs = [];

    function initNavBar() {
        var output = [];
        $navObjs = $$('.guide-tt');
        $navObjs.forEach(function(h2) {
            output.push('<a href="#{{id}}">{{name}}</a>'
                .replace(/{{id}}/g, h2.id)
                .replace(/{{name}}/g, h2.innerText)
            );
        });
        var $nav = document.createElement('nav');
        $nav.className = 'anchor-bar';
        $nav.innerHTML = output.join('');
        $$('body')[0].appendChild($nav);
    }

    document.addEventListener("DOMContentLoaded", initNavBar);

    var stamp = 0;
    document.addEventListener('scroll', function() {
        if (stamp) clearTimeout(stamp);
        stamp = setTimeout(function() {
            var scrollY = window.scrollY;
            var isSelected = false;
            for (var i = 0, len = $navObjs.length; i < len; i++) {
                var $obj = $navObjs[i];
                var $nextObj = $navObjs[i + 1] || {
                    offsetTop: Infinity
                };
                var $anchor = $$('[href=\\#' + $obj.id + ']')[0];
                $anchor.classList.remove('active');
                if (scrollY >= $obj.offsetTop && scrollY < $nextObj.offsetTop) {
                    $anchor.classList.add('active');
                } else if (i === 0 && scrollY < $navObjs[0].offsetTop) {
                    $anchor.classList.add('active');
                }
            }
        }, 0);
    });

})();
