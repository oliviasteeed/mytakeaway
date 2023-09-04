'use strict';

//show book cover image on hover (this is horribly inefficient, figure out how to loop through array and do this)

//the big leap//
var bigleapimg = document.getElementById("thebigleap-img");
var bigleapbar = document.getElementById("thebigleap-bar");

bigleapbar.onmouseenter = function (e){
    bigleapimg.style.display="block";
}

bigleapbar.onmouseleave = function (e){
    bigleapimg.style.display="none";
}

bigleapbar.onmousemove = function (e){
    bigleapimg.style.left = e.pageX + 10 + "px";
    bigleapimg.style.top = e.pageY - 80 + "px";
}

