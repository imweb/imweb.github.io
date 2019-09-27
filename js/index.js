var $body = $(document.body);
var $topBtn = $('.js-scroll-top-btn');
var $win = $(window);

$body.on('click', '.js-scroll-top-btn', function() {
    console.log('22');
    $(document.documentElement).animate({
        scrollTop: 0
    })
})
$win.on('scroll', function() {
    if ($win.scrollTop() > 200) {
        $topBtn.show();
    } else {
        $topBtn.hide();
    }
});

