'use strict';

//show book cover image on hover (this is horribly inefficient, figure out how to loop through array and do this)

//the inmates are running the asylum//
var inmatesimg = document.getElementById("inmates-img");
var inmatesbar = document.getElementById("inmates-bar");

inmatesbar.onmouseenter = function (e){
    inmatesimg.style.display="block";
}

inmatesbar.onmouseleave = function (e){
    inmatesimg.style.display="none";
}

inmatesbar.onmousemove = function (e){
    inmatesimg.style.left = e.pageX + 10 + "px";
    inmatesimg.style.top = e.pageY - 80 + "px";
}

//happy city//
var happycityimg = document.getElementById("happycity-img");
var happycitybar = document.getElementById("happycity-bar");

happycitybar.onmouseenter = function (e){
    happycityimg.style.display="block";
}

happycitybar.onmouseleave = function (e){
    happycityimg.style.display="none";
}

happycitybar.onmousemove = function (e){
    happycityimg.style.left = e.pageX + 10 + "px";
    happycityimg.style.top = e.pageY - 80 + "px";
}
