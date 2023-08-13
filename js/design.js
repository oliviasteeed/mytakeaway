'use strict';

//show book cover image on hover (this is horribly inefficient, figure out how to loop through array and do this)

// the medusa and the snail //

var themedusaimg = document.getElementById("themedusa-img");
var themedusabar = document.getElementById("themedusa-bar");

themedusabar.onmouseenter = function (e){
    themedusaimg.style.display="block";
}

themedusabar.onmouseleave = function (e){
    themedusaimg.style.display="none";
}

themedusabar.onmousemove = function (e){
    themedusaimg.style.left = e.pageX + 10 + "px";
    themedusaimg.style.top = e.pageY - 80 + "px";
}

