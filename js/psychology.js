'use strict';

//show book cover image on hover (this is horribly inefficient, figure out how to loop through array and do this)

// the meaning of things //

var themeaningimg = document.getElementById("themeaning-img");
var themeaningbar = document.getElementById("themeaning-bar");

themeaningbar.onmouseenter = function (e){
    themeaningimg.style.display="block";
}

themeaningbar.onmouseleave = function (e){
    themeaningimg.style.display="none";
}

themeaningbar.onmousemove = function (e){
    themeaningimg.style.left = e.pageX + 10 + "px";
    themeaningimg.style.top = e.pageY - 80 + "px";
}


//the development of meaning //

var thedevimg = document.getElementById("thedevelopment-img");
var thedevbar = document.getElementById("thedevelopment-bar");

thedevbar.onmouseenter = function (e){
    thedevimg.style.display="block";
}

thedevbar.onmouseleave = function (e){
    thedevimg.style.display="none";
}

thedevbar.onmousemove = function (e){
    thedevimg.style.left = e.pageX + 10 + "px";
    thedevimg.style.top = e.pageY - 80 + "px";
}
