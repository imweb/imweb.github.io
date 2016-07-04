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

        var summary = topic.summary;
        summary = "<p>" + summary.replace(/<(?:.|\n)*?>/gm, '').substr(0, 140) + "</p>";

        var excerptLink = "<p><a href='" + link + "' class='excerpt-link'>Read More...</a></p>";

        var time = topic.create_at;
        var timeShow = time.substr(0,10);
        var timeSpan = "<time datetime='" + time +"' itemprop='datePublished'>"+ timeShow + "</time>";

        var tab = topic.tab;
        var tabName;
        switch (tab) {
            case "html":
                tabName = "HTML&HTML5";
                break;
            case "rebuild":
                tabName = "CSS/重构";
                break;
            case "network":
                tabName = "HTTP网络";
                break;
            case "secure":
                tabName = "Web安全";
                break;
            case "browser":
                tabName = "浏览器";
                break;
            case "debug":
                tabName = "调试";
                break;
            case "build":
                tabName = "构建工具";
                break;
            case "performance":
                tabName = "性能";
                break;
            case "lib":
                tabName = "前端库";
                break;
            case "node":
                tabName = "nodeJS全栈";
                break;
            case "mobile":
                tabName = "移动开发";
                break;
            case "tools":
                tabName = "工具建设";
                break;
            case "op":
                tabName = "运营";
                break;
            case "frame":
                tabName = "基础库";
                break;
            case "js":
                tabName = "javascript技术";
                break;
            case "dev":
                tabName = "开发模式";
                break;
            default:
                tabName = "";
        }

        var tabLink = "<a href='http://imweb.io/tab/"+ tab  + "'>" + tabName + "</a>";

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
            // 将 最新文章 改成 精华文章
            // url:"http://imweb.io/topics/latestTopics", 
            url:"http://imweb.io/topics/latestTopics/sort/top_good",
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
    });

$('body').on('click', '.js-scroll-top-btn', function(e) {
    $('body').animate({
        scrollTop: 0
    })
})
$(window).scroll(checkAndShowBtn);

function checkAndShowBtn() {
    if ($(window).scrollTop() > 200) {
        $('.js-scroll-top-btn').show();
    } else {
        $('.js-scroll-top-btn').hide();
    }
}

checkAndShowBtn();


}(jQuery));