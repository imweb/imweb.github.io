/**
 * Main JS file for Casper behaviours
 */

/*globals jQuery, document */
(function ($) {
    "use strict";
    var topics = new Array(6);
    //调用imweb社区最新文章接口
    var latestTopics = function(topic){
        var link = "http://imweb.io/topic/" + topic._id;

        var summary = "<p>" + topic.summary + "<p>";
        summary = summary.replace(/<(?:.|\n)*?>/gm, '').substr(0, 140);

        var excerptLink = "<p><a href='" + link + "' class='excerpt-link'>Read More...</a></p>";

        var time = topic.create_at;
        var timeShow = time.substr(0,10);
        var timeSpan = "<time datetime='" + time +"' itemprop='datePublished'>"+ timeShow + "</time>";

        var tab = topic.tab;
        switch (tab) {
            case "html":
                tab = "HTML&HTML5";
                break;
            case "rebuild":
                tab = "CSS/重构";
                break;
            case "network":
                tab = "HTTP网络";
                break;
            case "secure":
                tab = "Web安全";
                break;
            case "browser":
                tab = "浏览器";
                break;
            case "debug":
                tab = "调试";
                break;
            case "build":
                tab = "构建工具";
                break;
            case "performance":
                tab = "性能";
                break;
            case "lib":
                tab = "前端库";
                break;
            case "node":
                tab = "nodeJS全栈";
                break;
            case "mobile":
                tab = "移动开发";
                break;
            case "tools":
                tab = "工具建设";
                break;
            case "op":
                tab = "运营";
                break;
            case "frame":
                tab = "基础库";
                break;
            case "js":
                tab = "javascript技术";
                break;
        }

        var tabLink = "<a href='http://imweb.io/tab/"+ tab  + "'>" + tab + "</a>";

        var postMeta = "<span class='post-meta'>" + timeSpan + " | " + tabLink + "</span>";
        var postTitle = "<h3 class='post-title'><a href='" +link +"'>" + topic.title + "</a></h3>";
        var section = "<section class='post-excerpt'>" + summary + excerptLink + "</section>";
        var article = "<article class='post index-post'><header class='post-header'>" + postMeta + postTitle + "</header>" + section + "</article>";
        $(".latest-article").append(article);
    }


    $(document).ready(function(){
    	$.ajax({
			type:"get",
			async:false,
		    url:"http://imweb.io/topics/latestTopics",
		    dataType:"jsonp",
			jsonp: "callback",
            jsonpCallback:"callback",
            data:{
            	topics: topics
            },
            success: function(callback){
            	for(var i in callback){
            		topics[i] = callback[i];
                    latestTopics(topics[i]);
            	}
            },
            error: function(){
                alert('fail');
             }
		});
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


