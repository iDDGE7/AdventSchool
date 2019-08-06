var showPosition = 'translateX(0%)';
var hiddenPosition = 'translateX(100%)';

var slideHiddenLeft = 'slide slideHiddenLeft';
var slideShowLeft = 'slide slideShowLeft';
var slideHiddenRight = 'slide slideHiddenRight';
var slideShowRight = 'slide slideShowRight';

var slide1 = document.getElementById('slide1');
var slide2 = document.getElementById('slide2');
var slide3 = document.getElementById('slide3');
var slide4 = document.getElementById('slide4');
var pos = 1;

var btnLeft = document.getElementById('btn-left-action');
var btnRight = document.getElementById('btn-right-action');

var interval = setInterval(slideRight, 3000);
var timer;

btnLeft.addEventListener('click', function () {
    slideLeft();
    clearInterval(interval);
    clearInterval(interval);
    clearTimeout(timer);
    timer = setTimeout(timerLeft, 10000);
});

btnRight.addEventListener('click', function () {
    slideRight();
    clearInterval(interval);
    clearTimeout(timer);
    timer = setTimeout(timerRight, 10000);
});

function timerLeft() {
    interval = setInterval(slideLeft, 3000);
}

function timerRight() {
    interval = setInterval(slideRight, 3000);
}

function slideLeft() {

    if (pos == 1) {
        slide1.className = slideHiddenLeft;

        slide2.className = slideShowLeft;
        slide2.style.transform = showPosition;

        slide1.style.transform = hiddenPosition;
        slide3.style.transform = hiddenPosition;
        slide4.style.transform = hiddenPosition;
        pos = 2;
    }
    else if (pos == 2) {
        slide2.className = slideHiddenLeft;

        slide3.className = slideShowLeft;
        slide3.style.transform = showPosition;

        slide2.style.transform = hiddenPosition;
        slide1.style.transform = hiddenPosition;
        slide4.style.transform = hiddenPosition;
        pos = 3;
    } else if (pos == 3) {
        slide3.className = slideHiddenLeft;

        slide4.className = slideShowLeft;
        slide4.style.transform = showPosition;

        slide3.style.transform = hiddenPosition;
        slide1.style.transform = hiddenPosition;
        slide2.style.transform = hiddenPosition;
        pos = 4;
    } else if (pos == 4) {
        slide4.className = slideHiddenLeft;

        slide1.className = slideShowLeft;
        slide1.style.transform = showPosition;

        slide4.style.transform = hiddenPosition;
        slide3.style.transform = hiddenPosition;
        slide2.style.transform = hiddenPosition;
        pos = 1;
    }
}

function slideRight() {
    if (pos == 1) {
        slide1.className = slideHiddenRight;

        slide4.className = slideShowRight;
        slide4.style.transform = showPosition;

        slide1.style.transform = hiddenPosition;
        slide3.style.transform = hiddenPosition;
        slide2.style.transform = hiddenPosition;
        pos = 4;
    }
    else if (pos == 4) {
        slide4.className = slideHiddenRight;

        slide3.className = slideShowRight;
        slide3.style.transform = showPosition;

        slide2.style.transform = hiddenPosition;
        slide1.style.transform = hiddenPosition;
        slide4.style.transform = hiddenPosition;
        pos = 3;
    } else if (pos == 3) {
        slide3.className = slideHiddenRight;

        slide2.className = slideShowRight;
        slide2.style.transform = showPosition;

        slide3.style.transform = hiddenPosition;
        slide1.style.transform = hiddenPosition;
        slide4.style.transform = hiddenPosition;
        pos = 2;
    } else if (pos == 2) {
        slide2.className = slideHiddenRight;

        slide1.className = slideShowRight;
        slide1.style.transform = showPosition;

        slide4.style.transform = hiddenPosition;
        slide3.style.transform = hiddenPosition;
        slide2.style.transform = hiddenPosition;
        pos = 1;
    }
}
