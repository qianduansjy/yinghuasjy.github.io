/**
 * Created by sun xue on 2016/10/22.
 */


var slider=document.getElementById("report_slider");
var arrLeft=document.getElementById("ty_about_report_nav_prev");
var arrRight=document.getElementById("ty_about_report_nav_next");
var pics=slider.children;
var sliderContainer=document.getElementById("report-slider-container");

var sliderArr=[
    {opacity:1,left:-165,className:"about-report-slide"},
    {opacity:1,left:75,className:"about-report-slide"},
    {opacity:1,left:315,className:"about-report-slide ty-active"},
    {opacity:1,left:685,className:"about-report-slide"},
    {opacity:1,left:925,className:"about-report-slide"},
    {opacity:0,left:1165,className:"about-report-slide"},
    {opacity:0,left:685,className:"about-report-slide"},
    {opacity:0,left:315,className:"about-report-slide"},
    {opacity:0,left:75,className:"about-report-slide"},
    {opacity:0,left:-405,className:"about-report-slide"}
];


for(var i=0;i<pics.length;i++){
    pics[i].className=sliderArr[i].className;
    pics[i].style.opacity=sliderArr[i].opacity;
    pics[i].style.left=sliderArr[i].left+"px";
}

var flag=true;
arrRight.onclick=function(){
    if(flag==true){
        flag=false;
        sliderArr.unshift(sliderArr.pop());
        for(var i=0;i<pics.length;i++){
            pics[i].className=sliderArr[i].className;
            pics[i].style.opacity=sliderArr[i].opacity;
            animate(pics[i],{left:sliderArr[i].left},function(){
                flag=true;
            });
        }
    }

    };

arrLeft.onclick=function(){
    if(flag==true){
        flag=false;
        sliderArr.push(sliderArr.shift());
        for(var i=0;i<pics.length;i++){
            pics[i].className=sliderArr[i].className;
            pics[i].style.opacity=sliderArr[i].opacity;
            animate(pics[i],{left:sliderArr[i].left},function(){
                flag=true;
            });
        }
    }
};

var sliderTimer=null;
sliderTimer=setInterval(function(){
    arrRight.click();
},2000);

sliderContainer.onmouseover=function(){
    clearInterval(sliderTimer);
}

sliderContainer.onmouseout=function(){
    sliderTimer=setInterval(function(){
        arrRight.click();
    },2000);
}






/*.ty-about-share-detail-left {*/
/*float: left;*/
/*width: 160px;*/
/*text-align: center*/
/*}*/

/*.ty-about-share-detail-right {*/
/*padding-left: 200px;*/
/*position: relative;*/
/*height: 100%*/
/*}*/

/*.ty-about-share-detail-right h4 {*/
/*font-size: 22px;*/
/*color: #777;*/
/*font-weight: 400;*/
/*height: 60px;*/
/*line-height: 60px;*/
/*margin-bottom: 5px*/
/*}*/

/*.ty-about-share-detail-right p {*/
/*line-height: 1.7*/
/*}*/

/*.ty-about-share-weibo-right:after, .ty-about-share-weibo-right:before {*/
/*position: absolute;*/
/*content: '';*/
/*height: 16px;*/
/*width: 1px;*/
/*background: #777;*/
/*left: 265px;*/
/*top: 83px*/
/*}*/

/*.ty-about-share-wechat-left img {*/
/*width: 140px;*/
/*margin: -20px 0 0 20px*/
/*}*/

/*.ty-about-share-weibo-right:after {*/
/*left: 375px*/
/*}*/

/*.ty-about-share-detail-mail {*/
/*height: 110px;*/
/*line-height: 110px;*/
/*text-align: center;*/
/*display: block;*/
/*font-size: 30px;*/
/*position: relative*/
/*}*/

/*.ty-about-share-detail-mail img {*/
/*width: 30px;*/
/*position: relative;*/
/*top: 3px;*/
/*left: 1px*/
/*}*/

/*.ty-about-share-detail-mail i {*/
/*font-size: 40px;*/
/*position: relative;*/
/*top: 10px*/
/*}*/

/*.ty-about-share-detail-mail:active, .ty-about-share-detail-mail:link, .ty-about-share-detail-mail:visited {*/
/*color: #999*/
/*}*/

/*.ty-about-share-detail-mail-line {*/
/*position: absolute;*/
/*width: 0;*/
/*height: 2px;*/
/*background: #ddd;*/
/*left: 50%;*/
/*top: 85px;*/
/*-webkit-transition: all .5s ease-in-out;*/
/*-moz-transition: all .5s ease-in-out;*/
/*-ms-transition: all .5s ease-in-out;*/
/*-o-transition: all .5s ease-in-out;*/
/*transition: all .5s ease-in-out*/
/*}*/

/*.ty-about-download-btn, .ty-about-download-btn > a {*/
/*-webkit-transition: all .3s;*/
/*-moz-transition: all .3s;*/
/*-ms-transition: all .3s;*/
/*-o-transition: all .3s*/
/*}*/

/*.ty-about-share-detail-mail:hover .ty-about-share-detail-mail-line {*/
/*width: 308px;*/
/*margin-left: -154px*/
/*}*/
