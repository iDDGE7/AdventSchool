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
        for(var i=0;i<link.length;i++){
            link[i].style.color = "#76F0BA";
        }
        stateScroll = 1;
    }
    else if (stateScroll == 1) {
        header.className = 'header-down';
        bcHeader.className = 'nav-shadow-up';
        for(var i=0;i<link.length;i++){
            link[i].style.color = "white";
        }
        stateScroll = 0;
    }
}

function changeColor() {
    if (stateScroll == 0) {
        this.style.color = "rgb(34, 34, 34)";
    } else {
        this.style.color = "white";
    }

}

function resetColor() {
    if (stateScroll == 0) {
        this.style.color = "white";
    }else{
        this.style.color = "#76F0BA";
    }

}




// movile device button
// var buttonMenu = document.getElementById("btnMenuSection");
// var itemsSection = document.getElementById("itemsSection");


// var state = 'disable';

// function resetMenu() {
//     if (screen.width > 750) {
//         itemsSection.style.display = 'flex';
//         state = 'enable';
//     } else if (screen.width <= 750) {
//         itemsSection.style.display = 'none';
//         state = 'disable';
//     }
// }

// function showMenu() {
//     if (state == 'enable') {
//         itemsSection.style.display = 'flex';
//     } else if (state == 'disable') {
//         itemsSection.style.display = 'none';
//     }
// }

// buttonMenu.addEventListener('click', changeState)

// function changeState() {
//     if (state == 'disable') {
//         state = 'enable';
//     } else if (state == 'enable') {
//         state = 'disable';
//     }
//     showMenu();
// }

// function resetMenuOutItems() {
//     var posXItem = itemsSection.getBoundingClientRect().x;
//     var posYItem = itemsSection.getBoundingClientRect().y;
//     var widthItem = itemsSection.offsetWidth;
//     var heightItem = itemsSection.offsetHeight;
//     var posXButton = buttonMenu.getBoundingClientRect().x;
//     var posYButton = buttonMenu.getBoundingClientRect().y;
//     var widthButton = buttonMenu.offsetWidth;
//     var heightButton = buttonMenu.offsetHeight;
//     var x = window.event.clientX;
//     var y = window.event.clientY;

//     if (state == 'enable' && screen.width < 750) {

//         if ((x >= posXButton && x <= posXButton + widthButton && y >= posYButton && y <= posYButton + heightButton) ||
//             x >= posXItem && x <= posXItem + widthItem && y >= posYItem && y <= posYItem + heightItem) {
//             // console.log('ok');
//         } else {
//             state = 'disable';
//             itemsSection.style.display = 'none';
//             // console.log('none');
//         }
//     }
// }


// Scroll Navbar
// var header = document.getElementById("header");
// var bcHeader = document.getElementById("bcHeader");
// var nav = document.getElementById("nav");
// var stateScroll = 0;

// window.onscroll = function () {
//     scroolls();
// }


// function scroolls() {
//     var scrollState = 0;
//     if (document.documentElement.scrollTop > 350) {
//         header.className = "headerDown";
//         header.style.top = '15px';
//         stateScroll = 1;


//         if (screen.width > 1530) {
//             nav.className = "navDown";
//         }
//         bcHeader.className = "shadowDown";

//     } else if (document.documentElement.scrollTop < 350 && stateScroll == 1) {
//         header.className = "headerUp";
//         header.style.top = '50px';
//         stateScroll = 0;
//         bcHeader.className = "shadowUp";
//         if (screen.width > 1530) {
//             nav.className = "navUp";
//         }

//     }
//     // scrollCards(scrollState);
// }