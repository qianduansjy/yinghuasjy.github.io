/**
 * Created by fq018 on 2016/10/18.
 */
function animate(obj, json, fn) {
    if (obj.timer) {
        clearInterval(obj.timer)
    }
    obj.timer = setInterval(function () {
        var flag = true
        for (var k in json) {
            var attr = k
            var target = json[k]
            var leader = getStyle(obj, attr)
            leader = parseInt(leader) || 0
            var step = (target - leader) / 10
            step = step > 0 ? Math.ceil(step) : Math.floor(step)
            leader = leader + step
            obj.style[attr] = leader + "px"
            if (leader != target) {
                flag = false
            }
        }
        if (flag) {
            clearInterval(obj.timer)
            if (fn) {
                fn()
            }
        }

    }, 15)
}

function getStyle(obj, attr) {
    if (window.getComputedStyle) {
        return window.getComputedStyle(obj)[attr]
    } else {
        return obj.currentStyle[attr]
    }
}