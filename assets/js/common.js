// URL获取参数
function getParam(paramName) {
    paramValue = "", isFound = !1;
    if (this.location.search.indexOf("?") == 0 && this.location.search.indexOf("=") > 1) {
        // 这里使用unescape会导致中文乱码，浏览器会encodeURIComponent，因此返回时decodeURIComponent一下
        arrSource = this.location.search.substring(1, this.location.search.length).split("&"), i = 0;
        while (i < arrSource.length && !isFound) arrSource[i].indexOf("=") > 0 && arrSource[i].split("=")[0].toLowerCase() == paramName.toLowerCase() && (paramValue = arrSource[i].split("=")[1], isFound = !0), i++
    }
    return paramValue == "" && (paramValue = null), decodeURIComponent(paramValue)
}
// 事件绑定
function addEvents(tag, ev, func) {
    // 非IE和IE9+
    if(tag.addEventListener) {
        tag.addEventListener(ev, func, false);
    }
    // IE6-IE8
    else if(tag.attachEvent) {
        tag.attachEvent('on'+ev, func);
    }
    // IE5
    else
        tag['on'+ev] = func;
}
// 事件移除
function removeEvents(tag, ev, func) {
    if(tag.removeListener) {
        tag.removeListener(ev, func, false);
    }
    else if(tag.detachEvent) {
        tag.detachEvent('on'+ev, func);
    }
    else
        tag['on'+ev] = null;
}
