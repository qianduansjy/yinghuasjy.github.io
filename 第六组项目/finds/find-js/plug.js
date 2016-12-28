/**
 * Created by Administrator on 2016/10/20.
 */
/**
 * 轮播图Js插件，完全脱离HTML CSS
 * @param parentElement 要放入的父元素对象
 * @param arrImg 格式{src: "images/1.jpg", width: 800, height: 270},
 */
function foundRotate(parentElement, selfIDName, arrImg) {
    //1动态创建页面
    //2创建轮播图大盒子
    var rotate = document.createElement("div");
    parentElement.appendChild(rotate);
    rotate.id = selfIDName;
    //CSS样式
    setStyle(rotate, {
        height: arrImg[0].height + "px",
        width: arrImg[0].width + "px",
        //padding: "5px",
        //margin: "100px auto",
        //border: "1px solid #ccc"
    });
    //3创建遮罩盒子
    var screen = document.createElement("div");
    //CSS样式
    setStyle(screen, {
        height: arrImg[0].height + "px",
        width: arrImg[0].width + "px",
        position: "relative",
        overflow: "hidden",
    });
    rotate.appendChild(screen);
    //4创建ul列表
    var ul = document.createElement("ul");
    //CSS样式
    setStyle(ul, {width: (arrImg.length + 1) * arrImg[0].width + "px", position: "absolute"});
    screen.appendChild(ul);
    //4.1创建ul下的li标签
    for (var i = 0; i < arrImg.length; i++) {
        var li = document.createElement("li");
        li.innerHTML = '<a href="###"><img src="' + arrImg[i].src + '" alt=""/></a>';
        setStyle(li, {float: "left"});
        ul.appendChild(li);
    }
    //5创建ol列表
    var ol = document.createElement("ol");
    //CSS样式
    setStyle(ol, {
        position: "absolute",
        right: "20px",
        bottom: "20px"
    });
    screen.appendChild(ol);
    //6创建ol下面的所有li标签
    for (var i = 0; i < arrImg.length; i++) {
        var li = document.createElement("li");
        setStyle(li, {
            height: "25px",
            lineHeight: "25px",
            textAlign: "center",
            float: "left",
            width: "30px",
            border: "2px solid #ccc",
            borderRadius: "50%",
            marginRight: "5px",
        });
        ol.appendChild(li);
    }

    //7创建箭头盒子
    var arrow = document.createElement("div");
    screen.appendChild(arrow);
    //CSS样式
    setStyle(arrow, {
        font: '700 60px/100px "mrcrosoft yahei"',
        opacity: "1",
    })
    //7.1创建左箭头
    var arrLeft = document.createElement("span");
    arrLeft.innerHTML = "<";
    arrow.appendChild(arrLeft);
    //CSS样式
    setStyle(arrLeft, {
        display: "block",
        height: "100px",
        width: "60px",
        cursor: "pointer",
        textAlign: "center",
        backgroundColor: "#333333",
        color: "#fff",
        position: "absolute",
        top: "50%",
        marginTop: "-50px"
    });
    //7.2创建右箭头
    var arrRight = document.createElement("span");
    arrRight.innerHTML = ">";
    arrow.appendChild(arrRight);
    //CSS样式
    setStyle(arrRight, {
        display: "block",
        height: "100px",
        width: "60px",
        cursor: "pointer",
        textAlign: "center",
        backgroundColor: "#333333",
        color: "#fff",
        position: "absolute",
        top: "50%",
        marginTop: "-50px",
        right: "0"
    });
    //////////////////////////////功能部分////////////////////////////////////////////////////
    //找对象
    var olList = ol.children;
    var ulList = ul.children;
    setStyle(olList[0], {backgroundColor: "orange"});

    var imgWidth = screen.offsetWidth;
    var flag = true;
    console.log(imgWidth)
    //给轮播盒子注册鼠标移入事件
    rotate.onmouseover = function () {
        animate(arrow, {opacity: .8});
    }
    //给轮播盒子注册鼠标移出事件
    rotate.onmouseout = function () {
        animate(arrow, {opacity: 0});
    }

    //实现简单轮播功能
    for (var i = 0; i < olList.length; i++) {
        var li = olList[i];
        li.index = i;
        li.onmouseover = function () {
            setSquareStyle(this);
            //修复跳图bug
            if (this.index == 0 && pic == ulList.length - 1) {
                ul.style.left = "0px";
                pic = square = 0;
            } else {
                animate(ul, {left: -this.index * imgWidth});
                pic = square = this.index;
            }

        }
    }


    //左右焦点无缝轮播；
    var cloneLi = ulList[0].cloneNode(true);
    ul.appendChild(cloneLi);
    var pic = 0;//记录图片位置
    var square = 0;//记录小方块的位置
    arrRight.onclick = function () {
        if (pic == ulList.length - 1) {
            ul.style.left = "0px";
            pic = 0;
        }
        pic++;
        animate(ul, {left: -pic * imgWidth});

        if (square == olList.length - 1) {
            square = 0;
        } else {
            square++;
        }
        setSquareStyle(olList[square]);
    }

    arrLeft.onclick = function () {

        if (pic == 0) {
            pic = ulList.length - 1;
            ul.style.left = -pic * imgWidth + "px";
        }
        pic--;
        animate(ul, {left: -pic * imgWidth});
        if (square == 0) {
            square = olList.length - 1;
        } else {
            square--;
        }
        setSquareStyle(olList[square]);

    }

    //设置小方块的样式
    function setSquareStyle(obj) {
        for (var i = 0; i < olList.length; i++) {
            setStyle(olList[i], {backgroundColor: ""});
        }
        setStyle(obj, {backgroundColor: "orange"});
    }
}



