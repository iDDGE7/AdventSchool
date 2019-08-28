var buttonMoreWellcome = document.getElementById('buttonMoreWellcome');
var popupWellcome = document.getElementById('popupWellcome');
var closePopup = document.getElementById('closePopup');

buttonMoreWellcome.addEventListener('click', function () {
    popupWellcome.style.visibility = 'visible';
    popupWellcome.style.opacity = '1';
});

closePopup.addEventListener('click', function () {
    popupWellcome.style.visibility = 'hidden';
    popupWellcome.style.opacity = '0';
});


var buttonMV = document.getElementById("buttonMV");
var popupMv = document.getElementById("popupMv");
var closePopupMV = document.getElementById("closePopupMV");

buttonMV.addEventListener('click',function(){
    popupMv.style.visibility = 'visible';
    popupMv.style.opacity = '1';
});

closePopupMV.addEventListener('click',function(){
    popupMv.style.visibility = 'hidden';
    popupMv.style.opacity = '0';
});

var closePopupInf = document.getElementById("closePopupInf");
var buttonCardHistoria = document.getElementById("buttonCardHistoria");
var popupsInfoHistoria  = document.getElementById("popupsInfoHistoria");

buttonCardHistoria.addEventListener('click',function(){
    popupsInfoHistoria.style.visibility = 'visible';
    popupsInfoHistoria.style.opacity = '1';
});

closePopupInf.addEventListener('click',function(){
    popupsInfoHistoria.style.visibility = 'hidden';
    popupsInfoHistoria.style.opacity = '0';
});