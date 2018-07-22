UrlParm = function() { // url参数
    var data, index;
    (function init() {
        data = [];
        index = {};
        var u = window.location.search.substr(1);
        if (u != '') {
            var parms = decodeURIComponent(u).split('&');
            for (var i = 0, len = parms.length; i < len; i++) {
                if (parms[i] != '') {
                    var p = parms[i].split("=");
                    if (p.length == 1 || (p.length == 2 && p[1] == '')) {// p | p=
                        data.push(['']);
                        index[p[0]] = data.length - 1;
                    } else if (typeof(p[0]) == 'undefined' || p[0] == '') { // =c | =
                        data[0] = [p[1]];
                    } else if (typeof(index[p[0]]) == 'undefined') { // c=aaa
                        data.push([p[1]]);
                        index[p[0]] = data.length - 1;
                    } else {// c=aaa
                        data[index[p[0]]].push(p[1]);
                    }
                }
            }
        }
    })();
    return {
        // 获得参数,类似request.getParameter()
        parm : function(o) { // o: 参数名或者参数次序
            try {
                return (typeof(o) == 'number' ? data[o][0] : data[index[o]][0]);
            } catch (e) {
            }
        },
        //获得参数组, 类似request.getParameterValues()
        parmValues : function(o) { //  o: 参数名或者参数次序
            try {
                return (typeof(o) == 'number' ? data[o] : data[index[o]]);
            } catch (e) {}
        },
        //是否含有parmName参数
        hasParm : function(parmName) {
            return typeof(parmName) == 'string' ? typeof(index[parmName]) != 'undefined' : false;
        },
        // 获得参数Map ,类似request.getParameterMap()
        parmMap : function() {
            var map = {};
            try {
                for (var p in index) {  map[p] = data[index[p]];  }
            } catch (e) {}
            return map;
        }
    }
}();

function showTheme() {

    if(themeCount%2==1){
        $('header.main').css({"background":"linear-gradient(to bottom, #e53831 0%,#ae2a24 100%)","border-bottom":"1px solid #ae2a24"});
        $('.card').css("background-image","url(images/ting4.png)");
        $('.blue').css({"border":"1px solid #ae2a24","background":"linear-gradient(to bottom, #e53831 0%,#ae2a24 100%)"});
        $('nav ul li.section').css({"background":"linear-gradient(to bottom, #e53831 0%,#ae2a24 100%)","border-top":"1px solid #ae2a24"});
        //此句无效，猜测必须放在hover事件中才可以 $('nav ul li:hover').css({"background":"linear-gradient(to bottom, #e53831 0%,#ae2a24 100%)","border-top":"1px solid #ae2a24"});
        $('nav ul li').hover( //只有在触发click时才会加载，这也解释了为什么此段可以放在<nav>之前
            function () {
                $('nav ul li:hover').css({"background":"linear-gradient(to bottom, #e53831 0%,#ae2a24 100%)","border-top":"1px solid #ae2a24"});
            },function () {
                $('nav ul li').css({"background":"#3B3E40","border-top":"1px solid #46494b"});
                $('nav ul li.section').css({"background":"linear-gradient(to bottom, #e53831 0%,#ae2a24 100%)","border-top":"1px solid #ae2a24"});
            }
        );
    }else {
        $('header.main').css({"background":"linear-gradient(to bottom, #208ed3 0%,#0272bd 100%)","border-bottom":"1px solid #5daced"});
        $('.card').css("background-image","url(images/timg3.png)");
        $('.blue').css({"border":"1px solid #0f70ad","background":"linear-gradient(to bottom, #208ed3 0%,#0272bd 100%)"});
        $('nav ul li.section').css({"background":"linear-gradient(to bottom, #208ed3 0%,#0272bd 100%)","border-top":"1px solid #5daced"});
        //此句无效，猜测必须放在hover事件中才可以 $('nav ul li:hover').css({"background":"linear-gradient(to bottom, #e53831 0%,#ae2a24 100%)","border-top":"1px solid #ae2a24"});
        $('nav ul li').hover( //只有在触发click时才会加载，这也解释了为什么此段可以放在<nav>之前
            function () {
                $('nav ul li:hover').css({"background":"linear-gradient(to bottom, #208ed3 0%,#0272bd 100%)","border-top":"1px solid #5daced"});
            },function () {
                $('nav ul li').css({"background":"#3B3E40","border-top":"1px solid #46494b"});
                $('nav ul li.section').css({"background":"linear-gradient(to bottom, #208ed3 0%,#0272bd 100%)","border-top":"1px solid #5daced"});
            }
        );
    }
}
var themeCount;
themeCount=localStorage.getItem("themeCount");
if(themeCount==null){
    //var ran = Math.random();
    //if(ran<=0.75){
        themeCount=0;
    //}else{
    //    themeCount=0;
    //}
    localStorage.setItem("themeCount",themeCount);
}
showTheme();
$('#test').click(
    function () {
        themeCount++;
        showTheme();
        localStorage.setItem("themeCount",themeCount);
    }
);


