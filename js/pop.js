var showPop = (function(){
    var menuAttend = $(".menu_attend");

    function showPop(id){
        $("#" + id).style.display = "";
        
    }

    menuAttend.onclick = function(){
        showPop('popAttend');
    }


    // 获取所有关闭按钮
    var closes = $$(".pop_close");
    for(var i = 0; i<closes.length; i++){
        closes[i].onclick = function(){
            var container =  this.parentElement.parentElement;
            container.style.display = "none";
        }
    }

    // 处理一些特殊的东西
    var popWx = $(".pop_wx"),
        popQq = $(".pop_qq");

    popWx.onclick = function(){
        popWx.classList.add("selected");
        popQq.classList.remove("selected");
    }

    popQq.onclick = function(){
        popQq.classList.add("selected");
        popWx.classList.remove("selected");
    }
    return showPop;
})();