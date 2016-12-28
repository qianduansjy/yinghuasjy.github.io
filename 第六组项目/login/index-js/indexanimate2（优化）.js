/**
 * Created by Administrator on 2016/10/18 0018.
 */

//-------------animate 让对象（元素）移动到目标位置（缓动）-----------------------

/**
 * 让对象（元素）移动到目标位置（缓动）
 * @param obj  参数：对象（元素）
 * @param target 参数：目标位置
 */
function animate(obj,json,fn){
    if(obj.timer){
        clearInterval(obj.timer);
    }
    obj.timer=setInterval(function(){
        var flag=true;
        for(var k in json){
            if(k=="opacity"){
                var attr=k;
                var target=json[k];
                var reader=getStyle(obj,attr);
                reader=parseFloat(reader) || 0;
                reader=reader*100;
                target=target*100;
                var step=(target-reader)/10;
                step=step>0?Math.ceil(step):Math.floor(step);
                reader+=step;
                obj.style[attr]=reader/100;
                obj.style["filter"]="alpha(opacity="+reader+")";
                if(reader!=target){
                    flag=false;
                }
            }else if(k=="zIndex"){
                obj.style.zIndex=json[k];
            }else{
                var attr=k;
                var target=json[k];
                var reader=getStyle(obj,attr);
                reader=parseInt(reader) || 0;
                var step=(target-reader)/10;
                step=step>0?Math.ceil(step):Math.floor(step);
                reader+=step;
                obj.style[attr]=reader+"px";
                if(reader!=target){
                    flag=false;
                }
            }
        }
        if(flag){
            clearInterval(obj.timer);
            if(fn){
                fn();
            }
        }

    },15)
}

//---------------------------------------------------------------

function animate1(obj,json,fn){
    if(obj.timer){
        clearInterval(obj.timer);
    }
    obj.timer=setInterval(function(){
        var flag=true;
        for(var k in json){
            if(k=="opacity"){
                var attr=k;
                var target=json[k];
                var reader=getStyle(obj,attr);
                reader=parseFloat(reader) || 0;
                reader=reader*100;
                target=target*100;
                var step=(target-reader)/10;
                step=step>0?Math.ceil(step):Math.floor(step);
                reader+=step;
                obj.style[attr]=reader/10;
                obj.style["filter"]="alpha(opacity="+reader+")";
                if(reader!=target){
                    flag=false;
                }
            }else if(k=="zIndex"){
                obj.style.zIndex=json[k];
            }else{
                var attr=k;
                var target=json[k];
                var reader=getStyle(obj,attr);
                reader=parseInt(reader) || 0;
                var step=(target-reader)/10;
                step=step>0?Math.ceil(step):Math.floor(step);
                reader+=step;
                obj.style[attr]=reader+"px";
                if(reader!=target){
                    flag=false;
                }
            }
        }
        if(flag){
            clearInterval(obj.timer);
            if(fn){
                fn();
            }
        }

    },15)
}
//-------------获取一个元素样式的属性值-----------------------------

/**
 * 获取一个元素样式的属性值
 * @param obj  参数：元素
 * @param attr  参数：元素样式的属性名
 * @returns {*} 返回：元素样式属性的值
 */
function getStyle(obj,attr){
    if(window.getComputedStyle){
        return window.getComputedStyle(obj,null)[attr];
    }else{
        return obj.currentStyle[attr];
    }
}

//------------------------------------------------------

function getBoxSize(){
    for(var i=0;i<14;i++){
        var sz=parseInt(Math.random()*30)+40;
        datas.push({width:sz,height:sz,opacity:1});
    }
}

//---------------------匀速-------------------------------------
function animate2(obj,target){
    if(obj.timer){
        clearInterval(obj.timer);
    }
    obj.timer=setInterval(function(){
        var reader=obj.offsetLeft;
        var step=20;
        if(reader>target){
            step=-step
        }
        var intance=Math.abs(reader-target)
        if(intance>Math.abs(step)){
            reader+=step;
            obj.style.left=reader+"px";
        }else{
            clearInterval(obj.timer);
            obj.style.left=target+"px";
        }
    },15)
}
//-------------------------------------------------------------
