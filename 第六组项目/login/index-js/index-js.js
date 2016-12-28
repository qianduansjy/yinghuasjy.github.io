/**
 * Created by fq018 on 2016/10/24.
 */
$(function () {
    $(".pic ul li").hover(function(){
        $(this).stop(true).animate({width:"789px"},500).siblings().stop(true).animate({width:"100px"},500);
    });
})



var btn1 = document.getElementById("btn1");
btn1.onclick = function () {
    btn1.disabled = true
    var num = 5
    var timer = setInterval(function () {
        num--
        btn1.value = num + "秒后可再次获取"

        if (num == 0) {
            clearInterval(timer)
            yzm.style.background="rgba(255,255,255,.3)";
            yzm.value="手机验证码";
            btn1.disabled = false
            btn1.value = "点击获取手机验证码"
        }
    }, 1000)
}

var username=document.getElementById("username");
var pwd=document.getElementById("pwd");
var username2=document.getElementById("username2");
var pwd2=document.getElementById("pwd2");
var te1=document.getElementById("te1");
var te2=document.getElementById("te2");
var pe1=document.getElementById("pe1");
var pe2=document.getElementById("pe2");
var yzm=document.getElementById("yzm");
var ye=document.getElementById("ye");


username.onfocus= function () {
    if(username.value=="邮箱或手机号"){
        username.style.background = "rgba(255, 255, 255, .0)"
        username.value="";
    }
}
username.addEventListener("blur", function ( ) {
    var mobileReg = /^(13[0-9]|14[57]|15[0-9]|17[1378]|18[0-9])\d{8}$/;
    var emailReg =  /^\w+@\w+(\.\w+)+$/;
    if(mobileReg.test(this.value)||emailReg.test(this.value)){
        te1.innerHTML = "";
        username.value=this.value
    }else if( username.value==""){
        te1.innerHTML = "";
        username.value="邮箱或手机号";
        username.style.background = "rgba(255, 255, 255, .3)"
    }else{
        te1.innerHTML = "&nbsp;&nbsp;邮箱或手机号格式不正确&nbsp;&nbsp;";
        //username.value="";
    }
},false)
username2.onfocus= function () {
    if(username2.value=="邮箱或手机号"){
        username2.style.background = "rgba(255, 255, 255, .0)"
        username2.value="";
    }
}
username2.addEventListener("blur", function ( ) {
    var mobileReg = /^(13[0-9]|14[57]|15[0-9]|17[1378]|18[0-9])\d{8}$/;
    if(mobileReg.test(this.value)){
        te2.innerHTML = "";
        username2.value=this.value
    }else if( username2.value==""){
        te2.innerHTML = "";
        username2.value="邮箱或手机号";
        username2.style.background = "rgba(255, 255, 255, .3)"
    }else{
        te2.innerHTML = "&nbsp;&nbsp;邮箱或手机号格式不正确&nbsp;&nbsp;";
        //username.value="";
    }
},false)

pwd.addEventListener("focus", function () {
    pwd.style.background = "rgba(255, 255, 255, .0)"
    pwd.placeholder="";
    pwd.value="";
},false)
pwd.addEventListener("blur", function () {
    if(pwd.value.length>=6 && pwd.value.length<=12){
        pe1.innerHTML="";
    }else if(pwd.value==""){
        pwd.placeholder="密码";
        pwd.style.background = "rgba(255, 255, 255, .3)"
        pe1.innerHTML="";
    }else{
        pe1.innerHTML="&nbsp;&nbsp;密码长度必须6-12位&nbsp;&nbsp;";
    }
},false)
pwd2.addEventListener("focus", function () {
    pwd2.style.background = "rgba(255, 255, 255, .0)"
    pwd2.placeholder=""
},false)
pwd2.addEventListener("blur", function () {
    if(pwd2.value.length>=6 && pwd.value.length<=12){
        pe2.innerHTML="";
    }else if(pwd2.value==""){
        pwd2.placeholder="密码";
        pwd2.style.background = "rgba(255, 255, 255, .3)"
        pe2.innerHTML="";
    }else{
        pe2.innerHTML="&nbsp;&nbsp;密码长度必须6-12位&nbsp;&nbsp;";
    }
},false)

yzm.addEventListener("focus", function () {
    if(yzm.value=="手机验证码"){
        yzm.style.background = "rgba(255, 255, 255, .0)"
        yzm.value="";
    }
},false)
yzm.addEventListener("blur", function () {
    if( yzm.value==""){
        ye.innerHTML = "&nbsp;&nbsp;手机验证码不能为空&nbsp;&nbsp;";
        yzm.value="手机验证码";
        yzm.style.background = "rgba(255, 255, 255, .3)"
    }
    //else{
    //    ye.innerHTML = "&nbsp;&nbsp;手机验证码不能为空&nbsp;&nbsp;";
    //    //username.value="";
    //}
})
//
$(document).ready(function () {
    $("#link").click(function () {
        $(".txt-error").html("");
        $(".username").val("邮箱或手机号").css("background","rgba(255, 255, 255, .3)");
        $(".pwd-error").html("");
        $(".pwd").val("").css("background","rgba(255, 255, 255, .3)");
        pwd.placeholder="密码";
        $(".txt-error1").html("");
        $(".username2").val("邮箱或手机号").css("background","rgba(255, 255, 255, .3)");
        $(".pwd-error1").html("");
        $(".pwd2").val("").css("background","rgba(255, 255, 255, .3)");
        pwd2.placeholder="密码";
        ye.innerHTML = "";
        yzm.value="手机验证码";
        yzm.style.background = "rgba(255, 255, 255, .3)"
        $(".login").slideToggle("slow", function () {
            $("#link").html() == "登录" ? $("#link").html("注册") : $("#link").html("登录")
        })

    });
})

$(function () {
    $(".loginbtn").mouseenter(function () {
      //setInterval(function () {
           $("#arrRight").stop().animate({"right": -40},1000);
           //$("#arrRight").animate({"right": 0},1000);
       //},1000)

    });
    $(".loginbtn").mouseleave(function () {
        $("#arrRight").stop().animate({"right": 0},1000);

    });

})
//$(function(){
//    function tiao(){
//        $("#arrRight").animate({right:"-40px"},1000,function(){$("#arrRight").animate({right:"0"},1000);} )
//    };
//
//    $(".loginbtn").mouseenter(function(){
//        timer=setInterval(tiao,1000);
//
//    });
//    $(".loginbtn").mouseleave(function(){
//        clearInterval(timer)
//
//
//
//    });
//
//});
//

//$(function(){
//    $(".section3").mouseenter(function () {
//        $(".pic1").animate({left:'30%'},1000);
//        $(".pic1").animate({fontSize:50},2000);
//        $(".pic").fadeIn("slow")
//    })
//})
$(function(){
    $(".section3").mouseenter(function () {
        $(".pic1").fadeIn(1000);
        //$(".pic1").animate({fontSize:50},2000);
        $(".pic").fadeIn(3000)
    })
})
//$(function(){
//    $(".pic").mouseenter(function () {
//        $(".pic1").fadeIn(1000);
//        //$(".pic1").animate({fontSize:50},2000);
//        $(".pic").fadeIn(3000)
//    })
//})
$(function () {
   setInterval(function () {
        $(".lx").animate({bottom:30});
        $(".lx").animate({bottom:20});
    },800)
})
$(function () {
    $(".lx").click(function () {
        $("#time").show(1000)
    })
})
$(function(){
    $(".section4").mouseenter(function () {
        $("#p4left").stop().animate({left:'-10px'},1000);
        $("#p4right").stop().animate({right:'-10px'},1000);
    })
})
//    $(function () {
//        $(window).scroll(function () {
//            if($(window).scrollTop()==$(document).height()-$(window).height()){
////            if($(window).scrollTop()==$(document).height()-$(window).height()){
//                $("#p4left").animate({left:'-10px'},2000);
//                $("#p4right").animate({right:'-10px'},2000);
//            }
//        })
//    })
$(function () {
    $(".lx").click(function () {
        $("document","body").animate({
            "scrollTop":$($(this,"href")).offset().top
        },1000)
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

window.onload= function () {
    var myAudio=document.getElementById("audio");
    myAudio.play()
}