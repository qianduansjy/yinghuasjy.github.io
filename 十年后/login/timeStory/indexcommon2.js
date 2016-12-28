/**
 * Created by Administrator on 2016/10/17 0017.
 */


//--------------getInnerText（获取元素内的文本内容）--------------

/**
 * 获取元素内的文本内容(兼容所有浏览器)
 * @param element  参数：元素
 * @returns {*|string}  返回文本内容
 */
function getInnerText(element){
    if(typeof element.innerText ==="string"){
        return element.innerText;
    }else{
        return element.textContent;
    }
}

//--------------setInnerText(设置元素内的文本内容)-------------------

/**
 * 设置元素内的文本内容
 * @param element 参数：元素
 * @param value 参数：文本内容
 */
function setInnerText(element,content){
    if(typeof element.innerText ==="string"){
        element.innerText=content;
    }else{
        element.textContent=content;
    }
}

//-------------getNextElement(获取下一个兄弟元素)---------------------

/**
 * 获取元素的下一个兄弟元素
 * @param element 参数：元素
 * @returns {*} 返回：下一个兄弟元素
 */
function getNextElement(element){
    if(element.nextElementSibling){
        return element.nextElementSibling;
    }else{
        var node=element.nextSibling;
        while(node && node.nodeType !=1){
            node=node.nextSibling;
        }
        return node;
    }
}

//-------------getPreviousElement(获取上一个兄弟元素)---------------------

/**
 * 获取元素的上一个兄弟元素
 * @param element 参数：元素
 * @returns {*} 返回：上一个兄弟元素
 */
function getPreviousElement(element){
    if(element.previousElementSibling){
        return element.previousElementSibling;
    }else{
        var node=element.previousSibling;
        while(node && node.nodeType !=1){
            node=node.previousSibling;
        }
        return node;
    }
}

//------------------getFirstChild（获得第一个子元素）--------------------

/**
 * 获得第一个子元素
 * @param element 参数：父元素
 * @returns {*} 返回：第一个子元素
 */
function getFirstChild(element){
    if(element.firstElementChild){
        return element.firstElementChild;
    }else{
        var node=element.firstChild;
        while(node && 1!=node.nodeType){
            node=node.nextSibling;
        }
        return node;
    }
}

//------------------getLastChild（获得最后一个子元素）------------------

/**
 * 获得最后一个子元素
 * @param element 参数：父元素
 * @returns {*} 返回：最后一个子元素
 */
function getLastChild(element){
    if(element.lastElementChild){
        return element.lastElementChild;
    }else{
        var node=element.lastChild;
        while(node && 1!=node.nodeType){
            node=node.previousSibling;
        }
        return node;
    }
}

//------------返回一个对象（scroll().top/scroll().left可直接取值）--------------------

/**
 *
 * @returns {{top: (*|number), left: (*|number)}}  返回一个对象（scroll().top/scroll().left可直接取值）
 */
function scroll(){
    return {
        top:window.scrollTop || document.documentElement.scrollTop || document.body.scrollTop || 0,
        left:window.scrollLeft || document.documentElement.scrollLeft || document.body.scrollLeft ||0
    }
}

//-----------返回一个对象（client().width/client().height可直接取值）------------------------------

/**
 *
 * @returns {{Height: (Number|number), Width: (Number|number)}}返回一个对象（client().width/client().width可直接取值）
 */
function client(){
    return{
        height:window.innerHeight || document.documentElement.clientHeight ||document.body.clientHeight ||0,
        width:window.innerWidth || document.documentElement.clientWidth ||document.body.clientWidth ||0
    }
}