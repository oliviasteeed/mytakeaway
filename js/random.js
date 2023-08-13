'use strict';

//show book cover image on hover (this is horribly inefficient, figure out how to loop through array and do this)

// the medusa and the snail //

var asteroidimg = document.getElementById("asteroid-img");
var asteroidbar = document.getElementById("asteroid-bar");

asteroidbar.onmouseenter = function (e){
    asteroidimg.style.display="block";
}

asteroidbar.onmouseleave = function (e){
    asteroidimg.style.display="none";
}

asteroidbar.onmousemove = function (e){
    asteroidimg.style.left = e.pageX + 10 + "px";
    asteroidimg.style.top = e.pageY - 80 + "px";
}

