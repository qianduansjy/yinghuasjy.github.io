/**
 * Created by fq018 on 2016/10/26.
 */
$(document).ready(function () {
    $("#link").click(function () {
        $(".login").slideToggle(1000, function () {

            $("#link").html() == "登录" ? $("#link").html("注册") : $("#link").html("登录")
        })

    });
})

$(function () {
    $(".loginbtn").mouseenter(function () {
        $("#arrRight").animate({"right": -50}, 1000);

    });
    $(".loginbtn").mouseleave(function () {
        $("#arrRight").animate({"right": 0}, 1000);

    });
})

$(function(){
    $(".ty-login-p3bg").mouseenter(function () {
        $(".pic1").animate({left:'60px'},1000);
        $(".pic1").animate({fontSize:'3em'},2000);
        $(".pic").fadeIn("fast")
    })
})

$(function(){
    $(".ty-login-p4bg").mouseenter(function () {
        $("#p4left").animate({left:'-10px'},2000);
        $("#p4right").animate({right:'-10px'},2000);
    })
})

$(function () {
    $("h2").click(function () {
        $(".exprobg").css("background-image","url(index-images/10.jpg)")

    })
    $(".exprobot").click(function () {
        $(".exprobg").css("background-image","url(index-images/11.jpg)")
    })
    $(".center").mouseenter(function () {
        $(".exprobg").css("background-image","url(index-images/login_expore_bg.jpg)")
    })
})
function autoScroll(obj, ul){
    $(obj).find(ul).animate({
        marginTop : "-50px"
    },500,function(){
        $(this).css({marginTop : "0px"}).find("li:first").appendTo(this);
    });
}
setInterval('autoScroll("#expro", "#ul")',2000)