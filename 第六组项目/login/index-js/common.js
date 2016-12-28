


/**
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

function client() {
    return {
        width: window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth || 0,
        height: window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight || 0
    }
}

function getMin(arr) {
    var minValue = arr[0]
    var minIndex = 0
    for (var i = 0; i < arr.length; i++) {
        if (minValue > arr[i]) {
            minValue = arr[i]
            minIndex = i
        }
    }
    return {
        index: minIndex,
        value: minValue
    }
}

function scroll() {
    return {
        scrollTop: window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0,
        scrollLeft: window.pageXOffset || document.documentElement.scrollLeft || document.body.scrollLeft || 0
    }
}

function getPageX(event) {
    return event.pageX || event.clientX + scroll().scrollLeft
}

function getPageY(event) {
    return event.pageY || event.clientY + scroll().scrollTop
}

function addEvent(obj, type, fn) {
    if (obj.addEventListener) {
        obj.addEventListener(type, fn, false)
    } else if (obj.attachEvent) {
        obj.attachEvent("on" + type, fn)
    } else {
        obj["on" + type] = fn
    }
}

function removeEvent(obj,type,fn){
    if(obj.removeEventListener){
    obj.removeEventListener(type,fn,false)
    }else if(obj.attachEvent){
        obj.attachEvent("on"+type,fn)
    }else{
        obj["on"+type]=null
    }
}