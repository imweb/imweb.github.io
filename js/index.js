/**
 * Main JS file for Casper behaviours
 */

/*globals jQuery, document */
(function ($) {
    "use strict";

    $(document).ready(function(){

        $(".post-content").fitVids();
        $(".site-head").interactive_bg({
        	/*
			strength：该选项控制背景随着光标移动而移动的强度。数值越高，强度越大。默认数值为25。
			Scale：该选项控制背景缩放的规模。接受正常css范围值所以1就是原始大小，并且在动画的开始和结束处都被禁用。选项的默认值是1.05。
			animationSpeed(动画速度)：该选项控制动画出入口的时间尺度。接受css持续时间，例如“100 ms”或“2.5s”。默认值是100 ms。
			Contain：如果你设置的scale数据高于1，那么在此处如果值为true将防止扩大对象/背景溢出容器，值为false时，扩展内容就会溢出。默认值为true。
			wrapContent：该选项让你选择是否在容器里面的所有元素都跟随光标的移动而移动，或者只是单纯的背景有效应。值为true时所有元素都响应该函数。默认值是false。
			*/
		   strength: 25,
		   scale: 1.05,
		   animationSpeed: "100ms",
		   contain: true,
		   wrapContent: false
		   });

    });

  	$(window).resize(function() {
		$(".site-head > .ibg-bg").css({
			width: $(window).outerWidth(),
			height: $(window).outerHeight()
		});
	});


}(jQuery));


