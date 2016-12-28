/**
 * Created by Administrator on 2016/10/21.
 */


//顶部导航开始

var find = document.getElementById("find");
var topNav = find.children[0];
var navLeft = topNav.children[0];
var ul = navLeft.children[0];
var lis = ul.children;
//给导航li注册鼠标经过事件
var pic = 0;//记录导航的背景样式位置
for (var i = 0; i < lis.length; i++) {
    var li = lis[i];
    li.index = i
    li.onmouseover = function () {
        for (var i = 0; i < lis.length; i++) {
            lis[i].className = "";
        }
        this.className = "current";
    }
    //注册点击事件，改变pic的值
    li.onclick = function () {
        pic = this.index;
    }
    //鼠标离开事件
    li.onmouseout = function () {
        for (var i = 0; i < lis.length; i++) {
            lis[i].className = "";
        }
        lis[pic].className = "current";
    }
}

var loginRight = topNav.children[2];
var links = loginRight.children;
//给注册登录按钮注册鼠标经过事件
for (var i = 0; i < links.length; i++) {
    links[i].onmouseover = function () {
        this.className = "current";
    }
    links[i].onmouseout = function () {
        this.className = "";
    }
}

//顶部导航结束

//主体部分开始

var main = find.children[1];
//版心W对象
var banx = main.children[0];
//主体部分所有的div盒子对象
var divs = banx.children;
//给所有div注册鼠标移入移出事件
for (var i = 0; i < divs.length; i++) {
    var div = divs[i];
    div.onmouseover = function () {
        var publicBox = this.children[0];
        var h2 = publicBox.children[0];
        var btmBox = publicBox.children[1];
        animate(h2, {top: 55});
        animate(btmBox, {top: 80});
    }
    div.onmouseout = function () {
        var publicBox = this.children[0];
        var h2 = publicBox.children[0];
        var btmBox = publicBox.children[1];
        animate(h2, {top: 65});
        animate(btmBox, {top: 130});
    }

}

//主体部分结束





































