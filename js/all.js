// 'use strict';

// //show book cover image on hover

// var img = document.getElementById("themeaning-img");
// var bar = document.getElementById("themeaning-bar");

// bar.addEventListener("mouseenter", mouseEnter);
// bar.addEventListener("mouseleave", mouseLeave);
// bar.addEventListener("mousemove", moveImg);


// function mouseEnter(){
//     img.style.display="block";
// }

// function mouseLeave(){
//     img.style.display="none";
// }

// function moveImg(e){
//     img.style.transform = `translate3d(calc(${e.clientX}px - 150px), calc(${e.clientY}px - 200%), 0)`
// }


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

// the development of meaning //

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
