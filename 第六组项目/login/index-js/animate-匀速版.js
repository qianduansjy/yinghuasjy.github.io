/**
 * Created by HUCC on 2016/7/27.
 */
function animate(element, target) {
    if (element.timer) {
        clearInterval(element.timer);
    }
    element.timer = setInterval(function () {
        var leader = element.offsetHeight;
        var step = 30;
        if (target < leader) {
            step = -step;
        }
        leader = leader + step;
        if (Math.abs(target - element.offsetHeight) >= Math.abs(step)) {
            element.style.top = leader + "px";
        } else {
            clearInterval(element.timer);
            element.style.top = target + "px";
        }
    }, 15);
}