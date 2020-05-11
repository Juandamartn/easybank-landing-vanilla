var menu = document.getElementById('header__menu'),
    modal = document.getElementById('modal'),
    hamburger = document.getElementById('header__hamburger');
iconMenu = document.querySelector('.header__hamburger img');

if (window.screen.width <= 425) {
    menu.classList.toggle('hidden');
}

hamburger.addEventListener('click', function () {
    if (modal.classList.contains('hidden')) {
        iconMenu.src = './img/icon-close.svg';
    } else {
        iconMenu.src = './img/icon-hamburger.svg';
    }
    modal.classList.toggle('hidden');
    menu.classList.toggle('hidden');
});