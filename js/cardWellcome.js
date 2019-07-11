var card1 = document.getElementById('card1');
var card2 = document.getElementById('card2');
var card3 = document.getElementById('card3');
var card4 = document.getElementById('card4');
var cards = document.getElementsByClassName('cardcontent');
var circle1 = document.getElementById('circle1');
var circle2 = document.getElementById('circle2');
var circle3 = document.getElementById('circle3');
var circle4 = document.getElementById('circle4');
var circles = document.getElementsByClassName('buttons-circle');
var inicio = 0;
var countcard = 1;
var cardAnt = card1;
var circleAnt = circle1;
var timeOutSlider;
var timerOut;

var sliderCard = setInterval(changeCardAuto, 3000);

circle1.addEventListener('click', function () {
    changeCardAuto();
    clearInterval(sliderCard);
    clearTimeout(timerOut);
    timerOut = setTimeout(function () {
        sliderCard = setInterval(changeCardAuto, 3000);
    }, 10000);
    return this;
});
circle2.addEventListener('click', function () {
    changeCardAuto();
    clearInterval(sliderCard);
    clearTimeout(timerOut);
    timerOut = setTimeout(function () {
        sliderCard = setInterval(changeCardAuto, 3000);
    }, 10000);
    return this;
});
circle3.addEventListener('click', function () {
    changeCardAuto();
    clearInterval(sliderCard);
    clearTimeout(timerOut);
    timerOut = setTimeout(function () {
        sliderCard = setInterval(changeCardAuto, 3000);
    }, 10000);
    return this;
});
circle4.addEventListener('click', function () {
    changeCardAuto();
    clearInterval(sliderCard);
    clearTimeout(timerOut);
    timerOut = setTimeout(function () {
        sliderCard = setInterval(changeCardAuto, 3000);
    }, 10000);
    return this;
});


for (var i = 0; i < cards.length; i++) {
    cards[i].style.transition = "all 0.5s";
    circles[i].style.transition = "all 0.5s";
}

function changeCardButtons() {
    if (this == circle1 && countcard != 1) {
        countcard = 1;
        card1.style.transform = "translateX(0%)";
        card2.style.transform = "translateX(100%)";
        card3.style.transform = "translateX(200%)";
        card4.style.transform = "translateX(300%)";
        this.style.background = "rgb(22, 151, 184)";
        circleAnt.style.background = "rgba(255, 255, 255, 0.404)";
        circleAnt = circle1;
        cardAnt = card1;
    }
    else if (this == circle2 && countcard != 2) {
        countcard = 2;
        card2.style.transform = "translateX(0%)";
        card1.style.transform = "translateX(-100%)";
        card3.style.transform = "translateX(100%)";
        card4.style.transform = "translateX(200%)";
        this.style.background = "rgb(22, 151, 184)";
        circleAnt.style.background = "rgba(255, 255, 255, 0.404)";
        circleAnt = circle2;
        cardAnt = card2;

    }
    else if (this == circle3 && countcard != 3) {
        countcard = 3;
        card3.style.transform = "translateX(0%)";
        card1.style.transform = "translateX(-200%)";
        card2.style.transform = "translateX(-100%)";
        card4.style.transform = "translateX(100%)";
        this.style.background = "rgb(22, 151, 184)";
        circleAnt.style.background = "rgba(255, 255, 255, 0.404)";
        circleAnt = circle3;
        cardAnt = card3;
    }
    else if (this == circle4 && countcard != 4) {
        countcard = 4;
        card4.style.transform = "translateX(0%)";
        card1.style.transform = "translateX(-300%)";
        card2.style.transform = "translateX(-200%)";
        card3.style.transform = "translateX(-100%)";
        this.style.background = "rgb(22, 151, 184)";
        circleAnt.style.background = "rgba(255, 255, 255, 0.404)";
        circleAnt = circle4;
        cardAnt = card4;

    }
}

function changeCardAuto() {
    if (countcard == 1) {
        countcard = 2;
        card1.style.transform = "translateX(0%)";
        card2.style.transform = "translateX(100%)";
        card3.style.transform = "translateX(200%)";
        card4.style.transform = "translateX(300%)";

        circle1.style.background = "rgb(22, 151, 184)";
        circleAnt.style.background = "rgba(255, 255, 255, 0.404)";
        circleAnt = circle1;
    }
    else if (countcard == 2) {
        countcard = 3;
        card2.style.transform = "translateX(0%)";
        card1.style.transform = "translateX(-100%)";
        card3.style.transform = "translateX(100%)";
        card4.style.transform = "translateX(200%)";
        circle2.style.background = "rgb(22, 151, 184)";
        circleAnt.style.background = "rgba(255, 255, 255, 0.404)";
        circleAnt = circle2;

    }
    else if (countcard == 3) {
        countcard = 4;
        card3.style.transform = "translateX(0%)";
        card1.style.transform = "translateX(-200%)";
        card2.style.transform = "translateX(-100%)";
        card4.style.transform = "translateX(100%)";
        circle3.style.background = "rgb(22, 151, 184)";
        circleAnt.style.background = "rgba(255, 255, 255, 0.404)";
        circleAnt = circle3;
    }
    else if (countcard == 4) {
        countcard = 1;
        card4.style.transform = "translateX(0%)";
        card1.style.transform = "translateX(-300%)";
        card2.style.transform = "translateX(-200%)";
        card3.style.transform = "translateX(-100%)";
        circle4.style.background = "rgb(22, 151, 184)";
        circleAnt.style.background = "rgba(255, 255, 255, 0.404)";
        circleAnt = circle4;

    }
}