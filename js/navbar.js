// scrooll
var header = document.getElementById("header");
var bcHeader = document.getElementById("bcHeader");
var nav = document.getElementById("nav");
var link = document.getElementsByClassName("link");
var logoMain = document.getElementsByClassName('fillMain');
var boxSearch = document.getElementById("boxSearch");
var menuButton = document.getElementsByClassName("fill-button-menu");

var stateScroll = 0;
var i = 0;
for (i; i < link.length; i++) {
    link[i].addEventListener("mouseover", changeColor);
    link[i].addEventListener("mouseout", resetColor);
}


window.onscroll = function () {
    var scrollpos = document.documentElement.scrollTop;
    if (scrollpos > 150) {
        bcHeader.style.transform = "translateY(0%)"
        header.style.transform = "translateY(0%)"
        boxSearch.style.backgroundColor = "rgb(41, 41, 41)";
        boxSearch.style.color = "white";
        boxSearch.className = "placeholder-white";
        for (var i = 0; i < link.length; i++) {
            link[i].style.color = "#252525";
        }
        for (var i = 0; i < logoMain.length; +i++) {
            logoMain[i].style.fill = "#252525";
        }
        for (var i = 0; i < menuButton.length; +i++) {
            menuButton[i].style.fill = "#252525";
        }
        stateScroll = 1;
    }
    else if (stateScroll == 1) {
        bcHeader.style.transform = "translateY(-100%)"
        header.style.transform = "translateY(100%)"
        boxSearch.style.backgroundColor = "white";
        boxSearch.className = "placeholder-dark";
        boxSearch.style.color = "rgb(49, 49, 49)";
        for (var i = 0; i < link.length; i++) {
            link[i].style.color = "white";
        }
        for (var i = 0; i < logoMain.length; +i++) {
            logoMain[i].style.fill = "white";
        }
        for (var i = 0; i < menuButton.length; +i++) {
            menuButton[i].style.fill = "white";
        }
        stateScroll = 0;
    }
}

function changeColor() {
    if (stateScroll == 0) {
        this.style.color = "rgb(83, 241, 144)";
    } else {
        this.style.color = "rgba(38, 167, 187, 0.815)";
    }

}

function resetColor() {
    if (stateScroll == 0) {
        this.style.color = "white";
    } else {
        this.style.color = "#252525";
    }

}


// movile device button
var buttonMenu = document.getElementById("menuSection");
var buttonCloseMenu = document.getElementById("buttonCloseMenu");
var menuMobile = document.getElementById("menuMobile");
var itemsMobile = document.getElementsByClassName("item-movil");
var menuToggle = 0;

window.onresize = function () {
    var sizeScreen = window.screen.width;
    if (sizeScreen < 1100) {
        if (menuToggle == 1) {
            menuMobile.style.left = '-50%';
            menuToggle = 0;
        }
    }
}


buttonMenu.addEventListener('click', function () {
    if (menuToggle == 0) {
        menuMobile.style.left = '50%';
        menuToggle = 1;
    } else {
        menuMobile.style.left = '-50%';
        menuToggle = 0;
    }

});


buttonCloseMenu.addEventListener('click', function () {
    if (menuToggle == 0) {
        menuMobile.style.left = '50%';
        menuToggle = 1;
    } else {
        menuMobile.style.left = '-50%';
        menuToggle = 0;
    }
});