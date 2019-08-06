var text = 'Advent School Bestuur'.split("");
var titleText = document.getElementById('titleText');
var blink = document.getElementById('blink');

var cont = 0;
var fxText = window.setInterval(function () {
    var textNew = document.createTextNode(text[cont]);
    titleText.appendChild(textNew);
    cont++;
    if (cont == text.length) {
        clearInterval(fxText);
    }
}, 200);
