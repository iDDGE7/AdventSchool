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