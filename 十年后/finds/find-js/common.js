/**
 * Created by Administrator on 2016/10/19.
 */

//JS常见兼容性问题封装


/**老版本火狐浏览器不支持innerText属性，支持textContent属性
 * IE678不支持textContent属性，但是支持innerText属性
 * 谷歌浏览器，新版本的火狐浏览器，IE9+（现代浏览器）：都支持
 * 获取innerText属性（兼容所有浏览器）
 * @param element
 * @returns {string}
 */
function getInnerText(element) {
    var result = "";

    if (typeof element.innerText == "string") {
        //说明我们能用innerText获取到内容
        result = element.innerText;
    } else {
        //能跑到这里来，说明是老版本的火狐浏览器
        result = element.textContent;
    }
    return result;
}

/**
 * 老版本火狐浏览器不支持innerText属性，支持textContent属性
 * IE678不支持textContent属性，但是支持innerText属性
 * 谷歌浏览器，新版本的火狐浏览器，IE9+（现代浏览器）：都支持
 * 设置innerText属性（兼容所有浏览器）
 * @param element 元素
 * @param content 内容
 */
function setInnerText(element, content) {
    if (typeof element.innerText == "string") {
        //说明支持innerText属性
        element.innerText = content;
    } else {
        //否则说明不支持innerText,说明textContent行
        element.textContent = content;
    }
}


/**
 *获得下一个兄弟元素
 * @param element
 * @returns {Object}
 */
function getNextElement(element) {
    //能力检测
    if (element.nextElementSibling) {
        return element.nextElementSibling;
    } else {
        //找下一个兄弟节点
        var node = element.nextSibling;
        while (node && node.nodeType != 1) {
            node = node.nextSibling;
        }
        return node;
    }
}

/**
 * 获得上一个兄弟元素
 * @param element
 * @returns {Object}
 */
function getPreviousElement(element) {
    if (element.previousElementSibling) {
        return element.previousElementSibling;
    } else {
        var node = element.previousSibling;
        while (node && node.nodeType != 1) {
            node = node.previousSibling;
        }
        return node;
    }
}

/**
 * 获得第一个孩子节点
 * @param element
 * @returns {Object}
 */
function getFirstElement(element) {
    if (element.firstElementChild) {
        return element.firstElementChild;
    } else {
        //第一个孩子节点
        var node = element.firstChild;
        while (node && node.nodeType != 1) {
            node = node.nextSibling;
        }
        return node;
    }
}


/**
 * 获得最后一个兄弟元素节点
 * @param element
 * @returns {Object}
 */
function getLastElement(element) {
    if (element.lastElementChild) {
        return element.lastElementChild;
    } else {
        var node = element.lastChild;
        while (node && node.nodeType != 1) {
            node = node.previousSibling;
        }
        return node;
    }
}

/**
 * 获取页面卷去的高度与宽度
 * @returns {{Top: (Number|number), Left: (Number|number)}}
 */
function scroll() {
    return {
        top: window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0,
        left: window.pageXOffset || document.documentElement.scrollLeft || document.body.scrollLeft || 0
    };
}



/**
 *获取计算后指定元素指定的样式
 * @param obj 指定的元素的对象
 * @param attr 指定的样式
 * @returns {*}
 */
function getStyle(obj, attr) {
    //能力检测
    if (window.getComputedStyle) {
        return window.getComputedStyle(obj, null)[attr];
    } else {
        return obj.currentStyle[attr];
    }
}

////////////////////////////下面是功能代码////////////////////////////////////////////



/**
 * 获取时间 yy-mm-dd hh-mm-ss格式
 * @returns {string}
 */
function getTime() {
    var date = new Date();
    var year = date.getFullYear();
    var month = date.getMonth();
    if (month < 10) {
        month = "0" + month;
    }
    var day = date.getDate();
    if (day < 10) {
        day = "0" + day;
    }
    var hour = date.getHours();
    if (hour < 10) {
        hour = "0" + hour;
    }

    var minute = date.getMinutes();
    if (minute < 10) {
        minute = "0" + minute;
    }

    var second = date.getSeconds();
    if (second < 10) {
        second = "0" + second;
    }

    return year + "-" + month + "-" + day + " " + hour + ":" + minute + ":" + second;
}

/**
 * 自定义动画函数
 * 对任意元素 ，任意样式，设置任意大小位置
 * @param obj 对象
 * @param json 传入的对象参数
 * @param fn 回调函数
 */
function animate(obj, json, fn) {
    if (obj.timer) {
        clearInterval(obj.timer);
    }
    //k  json[k]

    obj.timer = setInterval(function () {
        //获取当前值
        var flag = true;//大家的动画是不是都到了重点
        for (var k in json) {
            if (k == "opacity") {
                //1. parseInt 改成parseFloat
                //2. 把leader和target放大100倍
                //3. 设置的时候，除以100并且去掉px

                //难点：小数做不了动画
                var attr = k;
                var target = json[k];
                var leader = getStyle(obj, attr);//auto
                leader = parseFloat(leader) || 0;//如果没有这个样式，默认给0
                //leader使用getStyle是带单位的

                //让目标值扩大一百倍去做动画
                target = target * 100;
                leader = leader * 100;


                var step = (target - leader) / 40;//最少跑1px
                if (step > 0) {
                    step = Math.ceil(step);
                } else {
                    step = Math.floor(step);
                }
                leader = leader + step;
                obj.style[attr] = leader / 100;
                obj.style["filter"] = "alpha(opacity=" + leader + ")";

                //等所有的属性都到了终点的时候才清除定时器
                if (leader != target) {
                    flag = false;//如果发现还没有到终点，赶紧吼一嗓子
                }
            } else if(k === "zIndex"){
                //如果是zIndex属性，就直接设置
                obj.style["zIndex"] = json[k];
            } else {
                var attr = k;
                var target = json[k];
                var leader = getStyle(obj, attr);//auto
                leader = parseInt(leader) || 0;//如果没有这个样式，默认给0
                //leader使用getStyle是带单位的
                var step = (target - leader) / 10;//最少跑1px
                if (step > 0) {
                    step = Math.ceil(step);
                } else {
                    step = Math.floor(step);
                }
                leader = leader + step;
                obj.style[attr] = leader + "px";//px不能丢

                //等所有的属性都到了终点的时候才清除定时器
                if (leader != target) {
                    flag = false;//如果发现还没有到终点，赶紧吼一嗓子
                }
            }


        }

        //如果这个时候flag是true，说明假设是成立的
        if (flag) {
            clearInterval(obj.timer);
            if (fn) {
                fn();
            }

        }

    }, 15);


}


/**
 * 获取数组中最小的值与下标
 * @param arr 参数数组
 * @returns {{index: number, value: number}}
 */
function getMin(arr) {
    var minValue = arr[0];
    var minIndex = 0;
    for (var i = 0; i < arr.length; i++) {
        if (minValue > arr[i]) {
            minValue = arr[i];
            minIndex = i;
        }
    }

    return {
        index: minIndex,
        value: minValue
    };

}

/**
 * 获取窗口可视化高度与宽度
 * @returns {{width: (Number|number), height: (Number|number)}}
 */
function client() {
    return {
        width: window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth || 0,
        height: window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight || 0
    }
}


//给对象设置样式
/**
 * 给任意对象设置任意行内样式
 * @param obj 对象
 * @param json 要设置色Json对象值
 */
function setStyle(obj, json) {
    for (var k in json) {
        obj.style[k] = json[k];
    }
}























