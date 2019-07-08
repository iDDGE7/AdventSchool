// scrooll
var header = document.getElementById("header");
var bcHeader = document.getElementById("bcHeader");
var nav = document.getElementById("nav");
var link = document.getElementsByClassName("link");
var stateScroll = 0;
var i = 0;
for (i; i < link.length; i++) {
    link[i].addEventListener("mouseover", changeColor);
    link[i].addEventListener("mouseout", resetColor);
}


window.onscroll = function () {
    if (document.documentElement.scrollTop > 150) {
        header.className = 'header-up';
        bcHeader.className = 'nav-shadow-down';
        for (var i = 0; i < link.length; i++) {
            link[i].style.color = "#53DCF0";
        }
        stateScroll = 1;
    }
    else if (stateScroll == 1) {
        header.className = 'header-down';
        bcHeader.className = 'nav-shadow-up';
        for (var i = 0; i < link.length; i++) {
            link[i].style.color = "white";
        }
        stateScroll = 0;
    }
}

function changeColor() {
    if (stateScroll == 0) {
        this.style.color = "#53DCF0";
    } else {
        this.style.color = "white";
    }

}

function resetColor() {
    if (stateScroll == 0) {
        this.style.color = "white";
    } else {
        this.style.color = "#53DCF0";
    }

}




// movile device button
var buttonMenu = document.getElementById("menuSection");
var buttonCloseMenu = document.getElementById("buttonCloseMenu");
var menuMobile = document.getElementById("menuMobile");


buttonMenu.addEventListener('click', function(){
    menuMobile.className = "container-menu-mobile-show";
});
buttonCloseMenu.addEventListener('click', function(){
    menuMobile.className = "container-menu-mobile-hidden";
});