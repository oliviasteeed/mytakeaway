'use strict';

//show book cover image on hover (this is horribly inefficient, figure out how to loop through array and do this)

// asteroid city //
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

//love, sex and tragedy//
var lovesextragedyimg = document.getElementById("lovesextragedy-img");
var lovesextragedybar = document.getElementById("lovesextragedy-bar");

lovesextragedybar.onmouseenter = function (e){
    lovesextragedyimg.style.display="block";
}

lovesextragedybar.onmouseleave = function (e){
    lovesextragedyimg.style.display="none";
}

lovesextragedybar.onmousemove = function (e){
    lovesextragedyimg.style.left = e.pageX + 10 + "px";
    lovesextragedyimg.style.top = e.pageY - 80 + "px";
}

//requiem for the american dream//
var requiemimg = document.getElementById("requiem-img");
var requiembar = document.getElementById("requiem-bar");

requiembar.onmouseenter = function (e){
    requiemimg.style.display="block";
}

requiembar.onmouseleave = function (e){
    requiemimg.style.display="none";
}

requiembar.onmousemove = function (e){
    requiemimg.style.left = e.pageX + 10 + "px";
    requiemimg.style.top = e.pageY - 80 + "px";
}