'use strict';

//show book cover image on hover (this is horribly inefficient, figure out how to loop through array and do this)

// the meaning of things //

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

// creativity //
var creativityimg = document.getElementById("creativity-img");
var creativitybar = document.getElementById("creativity-bar");

creativitybar.onmouseenter = function (e){
    creativityimg.style.display="block";
}

creativitybar.onmouseleave = function (e){
    creativityimg.style.display="none";
}

creativitybar.onmousemove = function (e){
    creativityimg.style.left = e.pageX + 10 + "px";
    creativityimg.style.top = e.pageY - 80 + "px";
}