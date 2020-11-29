
// 感觉这有点骚气，直接就好了啦
function $(selector){
    return document.querySelector(selector);
}

function $$(selector){
    return document.querySelectorAll(selector);
}

function width(){
    return document.documentElement.clientWidth;
}

function height(){
    return document.documentElement.clientHeight;
}