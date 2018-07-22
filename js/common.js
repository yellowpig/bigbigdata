function quitThings() {
    $.ajax({
        url:"/api/user/logout",
        contentType: "application/json; charset=utf-8",
        type:"GET",
        success:function(msg) {
            console.log(msg);
            window.location.href="/";
        }
    });}

$("#backThings").click(function () {
    var href = window.location.search;//取?后的参数
    console.log(href);
    var attr = href.substring(href.indexOf("?")+1);
    console.log(attr);
    var attrs = attr.split("&");
    window.location.href = "/home?"+attrs[0]+"&"+attrs[1];});